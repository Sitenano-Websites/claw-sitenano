'use client'

import { useState, useEffect } from 'react'

interface Agent {
  id: number
  name: string
  description: string
  category: string
  stars: number
  avatar: string
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'CodeAssist Pro',
    description: 'AI-powered code assistant that helps developers write better code faster with intelligent suggestions',
    category: 'Coding',
    stars: 2400,
    avatar: '💻'
  },
  {
    id: 2,
    name: 'ResearchMind',
    description: 'Advanced research assistant for academic papers, market analysis, and data synthesis',
    category: 'Research',
    stars: 1800,
    avatar: '🔬'
  },
  {
    id: 3,
    name: 'ArtFlow Studio',
    description: 'Generate stunning artwork and designs from text descriptions with style control',
    category: 'Creative',
    stars: 3200,
    avatar: '🎨'
  },
  {
    id: 4,
    name: 'DataWiz',
    description: 'Automate data analysis and visualization workflows with intelligent insights',
    category: 'Productivity',
    stars: 956,
    avatar: '📊'
  },
  {
    id: 5,
    name: 'AutoBot Builder',
    description: 'No-code bot creation platform for business automation and workflow optimization',
    category: 'Automation',
    stars: 1500,
    avatar: '🤖'
  },
  {
    id: 6,
    name: 'DocuMaster',
    description: 'Intelligent document processing, summarization, and content extraction',
    category: 'Productivity',
    stars: 723,
    avatar: '📄'
  }
]

const categories = ['All', 'Coding', 'Research', 'Creative', 'Productivity', 'Automation']

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Discover the Future of AI Agents'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  const filteredAgents = activeCategory === 'All' 
    ? agents 
    : agents.filter(a => a.category === activeCategory)

  return (
    <main>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '72px',
        background: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '24px' }}>
            <span className="gradient-text">Agent</span>Hub
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#home" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Home</a>
            <a href="#agents" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Agents</a>
            <a href="#features" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Features</a>
            <a href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>About</a>
            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Add Your Agent
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
          `,
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'var(--accent-primary)',
          filter: 'blur(150px)',
          opacity: 0.1,
          top: '20%',
          left: '10%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'var(--accent-secondary)',
          filter: 'blur(120px)',
          opacity: 0.1,
          bottom: '10%',
          right: '15%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--accent-primary)',
            marginBottom: '24px',
            fontWeight: 600
          }}>
            Explore AI Agents
          </div>
          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
            fontFamily: 'Outfit'
          }}>
            {typedText}
            <span style={{ animation: 'pulse 1s ease-in-out infinite' }}>|</span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.7
          }}>
            A curated collection of powerful AI agents ready to enhance your workflow. 
            From coding assistants to creative tools, find the perfect agent for your needs.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#agents" className="btn-primary">Explore Agents</a>
            <a href="#features" className="btn-secondary">Learn More</a>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '64px',
            marginTop: '80px',
            flexWrap: 'wrap'
          }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, fontFamily: 'Outfit', color: 'var(--accent-primary)' }}>500+</div>
              <div style={{ color: 'var(--text-secondary)' }}>AI Agents</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, fontFamily: 'Outfit', color: 'var(--accent-secondary)' }}>50k+</div>
              <div style={{ color: 'var(--text-secondary)' }}>Active Users</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 800, fontFamily: 'Outfit', color: 'var(--accent-tertiary)' }}>1M+</div>
              <div style={{ color: 'var(--text-secondary)' }}>Tasks Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', fontFamily: 'Outfit' }}>
              Featured <span className="gradient-text">AI Agents</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              Explore our handpicked selection of the most powerful and innovative AI agents
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 600,
                  background: activeCategory === cat 
                    ? 'var(--gradient)' 
                    : 'transparent',
                  color: 'white',
                  border: activeCategory === cat 
                    ? 'none' 
                    : '1px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Agent Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px'
          }}>
            {filteredAgents.map((agent, index) => (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className="animate-fade-in"
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'var(--gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '20px'
                }}>
                  {agent.avatar}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, fontFamily: 'Outfit' }}>{agent.name}</h3>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: 'rgba(99, 102, 241, 0.2)',
                    color: 'var(--accent-primary)'
                  }}>
                    {agent.category}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '20px', lineHeight: 1.6 }}>
                  {agent.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <span>⭐</span>
                    {agent.stars.toLocaleString()}
                  </div>
                  <button style={{
                    marginLeft: 'auto',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--accent-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '120px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', fontFamily: 'Outfit' }}>
              Why Choose <span className="gradient-text">AgentHub</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to discover, evaluate, and deploy AI agents
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px'
          }}>
            {[
              { icon: '🔍', title: 'Easy Discovery', desc: 'Search and filter through hundreds of AI agents with detailed descriptions and user reviews' },
              { icon: '⚡', title: 'Quick Integration', desc: 'Get started in minutes with one-click deployment and comprehensive documentation' },
              { icon: '🛡️', title: 'Verified Agents', desc: 'All agents are vetted for quality, security, and performance before being listed' }
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '40px 32px',
                  background: 'var(--bg-card)',
                  borderRadius: '24px',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--accent-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  margin: '0 auto 24px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', fontFamily: 'Outfit' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" style={{
        padding: '120px 0',
        background: 'var(--bg-secondary)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', fontFamily: 'Outfit' }}>
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Join thousands of developers discovering and using AI agents every day
          </p>
          <button className="btn-primary">Browse All Agents</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '80px 0 40px',
        borderTop: '1px solid var(--border)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}>
            <div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '24px', marginBottom: '16px' }}>
                <span className="gradient-text">Agent</span>Hub
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                The ultimate destination for discovering and exploring AI agents
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                <a href="#home">Home</a>
                <a href="#agents">Agents</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Categories</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                <a href="#agents">Coding</a>
                <a href="#agents">Research</a>
                <a href="#agents">Creative</a>
                <a href="#agents">Productivity</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>Stay Updated</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
                Subscribe to get the latest agent updates
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  placeholder="Enter email"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    color: 'white',
                    fontSize: '14px'
                  }}
                />
                <button className="btn-primary" style={{ padding: '12px 20px' }}>→</button>
              </div>
            </div>
          </div>
          <div style={{
            textAlign: 'center',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
            color: 'var(--text-secondary)',
            fontSize: '14px'
          }}>
            © 2026 AgentHub. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {selectedAgent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '24px'
          }}
          onClick={() => setSelectedAgent(null)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              borderRadius: '24px',
              padding: '40px',
              maxWidth: '560px',
              width: '100%',
              border: '1px solid var(--border)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAgent(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'var(--gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              marginBottom: '24px'
            }}>
              {selectedAgent.avatar}
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px', fontFamily: 'Outfit' }}>{selectedAgent.name}</h3>
            <span style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 600,
              background: 'rgba(99, 102, 241, 0.2)',
              color: 'var(--accent-primary)',
              marginBottom: '20px'
            }}>
              {selectedAgent.category}
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              {selectedAgent.description}
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>⭐</span>
                <span style={{ fontWeight: 600 }}>{selectedAgent.stars.toLocaleString()}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>stars</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>🍴</span>
                <span style={{ fontWeight: 600 }}>{Math.floor(selectedAgent.stars * 0.3)}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>forks</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-primary" style={{ flex: 1 }}>View Documentation</button>
              <button className="btn-secondary" style={{ flex: 1 }}>GitHub →</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
