import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import './LiquidGlassBackground.css'

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    float wave = sin(pos.x * 2.0 + uTime * 0.3) * 0.08;
    wave += cos(pos.y * 1.5 + uTime * 0.2) * 0.08;
    pos.z += wave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uOpacity;
  
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for(int i = 0; i < 3; i++) {
      value += amplitude * smoothNoise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec2 uv = vUv * 2.0;
    float t = uTime * 0.08;
    
    float n1 = fbm(uv + t);
    float n2 = fbm(uv * 1.2 - t * 0.3);
    
    vec3 color = mix(uColor1, uColor2, n1);
    color = mix(color, uColor3, n2 * 0.4);
    
    float highlight = pow(n2, 3.0) * 0.3;
    color += vec3(highlight);
    
    float edge = 1.0 - length(vUv - 0.5) * 1.2;
    edge = smoothstep(0.0, 0.5, edge);
    
    gl_FragColor = vec4(color, uOpacity * edge);
  }
`

const GlassPlane: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#1a1a1a') },
      uColor2: { value: new THREE.Color('#0d0d0d') },
      uColor3: { value: new THREE.Color('#2a2a2a') },
      uOpacity: { value: 0.6 },
    }),
    []
  )

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 100

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const vel = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      
      vel[i * 3] = (Math.random() - 0.5) * 0.01
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005
    }
    
    return [pos, vel]
  }, [])

  useFrame(() => {
    if (!pointsRef.current) return
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += velocities[i * 3]
      positions[i * 3 + 1] += velocities[i * 3 + 1]
      positions[i * 3 + 2] += velocities[i * 3 + 2]
      
      if (Math.abs(positions[i * 3]) > 10) velocities[i * 3] *= -1
      if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i * 3 + 1] *= -1
      if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

const LiquidGlassBackground: React.FC = () => {
  const [isLowPower, setIsLowPower] = useState(false)

  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      const isLowCores = navigator.hardwareConcurrency <= 4
      setIsLowPower(isMobile || isLowCores)
    }
    
    checkPerformance()
  }, [])

  if (isLowPower) {
    return (
      <div className="liquid-glass-background fallback">
        <div className="fallback-gradient" />
      </div>
    )
  }

  return (
    <div className="liquid-glass-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <GlassPlane />
        <ParticleField />
      </Canvas>
      <div className="vignette-overlay" />
    </div>
  )
}

export default LiquidGlassBackground
