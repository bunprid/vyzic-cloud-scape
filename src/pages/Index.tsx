
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Database, 
  Server, 
  Network, 
  Shield, 
  Clock, 
  TrendingUp, 
  Lock, 
  Users, 
  DollarSign,
  HardDrive,
  Cpu,
  Globe,
  Zap,
  CircleDot,
  ServerCrash,
  Server as ServerIcon,
  DatabaseIcon,
  CloudCog,
  HardDriveIcon
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import WorldMap from '@/components/WorldMap';
import PricingCard from '@/components/PricingCard';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import NodesStatusCard from '@/components/NodesStatusCard';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Cloud Solutions</span> that Scale with Your Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience enterprise-grade cloud computing with Vyzic's global infrastructure. 
              Deploy, scale, and manage your applications with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-vyzic-600 hover:bg-vyzic-700 text-lg px-8 py-6">Get Started</Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800">Contact Sales</Button>
            </div>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl bg-gradient-to-br from-slate-900 to-slate-950">
              <div className="grid grid-cols-3 gap-px bg-slate-700/20 p-px">
                <div className="bg-slate-900/80 backdrop-blur p-6 flex flex-col items-center">
                  <Server className="h-10 w-10 text-vyzic-400 mb-2" />
                  <p className="text-sm text-center text-slate-300">Scalable Computing</p>
                </div>
                <div className="bg-slate-900/80 backdrop-blur p-6 flex flex-col items-center">
                  <Database className="h-10 w-10 text-vyzic-400 mb-2" />
                  <p className="text-sm text-center text-slate-300">Cloud Storage</p>
                </div>
                <div className="bg-slate-900/80 backdrop-blur p-6 flex flex-col items-center">
                  <Network className="h-10 w-10 text-vyzic-400 mb-2" />
                  <p className="text-sm text-center text-slate-300">Global Network</p>
                </div>
              </div>
              <div className="p-8 bg-slate-900/90 backdrop-blur">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Global Cloud Dashboard</h3>
                    <p className="text-slate-400">Monitor and manage your cloud resources from a single interface</p>
                  </div>
                  <Button className="bg-slate-800 hover:bg-slate-700 text-white flex-shrink-0">Launch Dashboard</Button>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-full aspect-square rounded-full bg-vyzic-600/10 blur-[100px] -top-1/3 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      </section>

      {/* Node Status Section */}
      <section id="nodes" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Node Status Monitor</h2>
            <p className="text-muted-foreground text-lg">
              Real-time status of our infrastructure nodes across all regions. 
              Monitor performance and reliability at a glance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NodesStatusCard 
              name="Compute Node A01" 
              location="North America East"
              status="online"
              type="High CPU"
              lastPing="Just now"
              icon={ServerIcon}
            />
            <NodesStatusCard 
              name="Database Node DB3" 
              location="Europe Central"
              status="online"
              type="High Memory"
              lastPing="2 min ago"
              icon={DatabaseIcon}
            />
            <NodesStatusCard 
              name="Storage Node S05" 
              location="Asia Pacific"
              status="warning"
              type="High Storage"
              lastPing="5 min ago"
              icon={HardDriveIcon}
            />
            <NodesStatusCard 
              name="Cache Node C12" 
              location="Australia"
              status="online"
              type="High Memory"
              lastPing="Just now"
              icon={CloudCog}
            />
            <NodesStatusCard 
              name="Backup Node B07" 
              location="North America West"
              status="offline"
              type="Standard Storage"
              lastPing="25 min ago"
              icon={ServerCrash}
            />
            <NodesStatusCard 
              name="GPU Node G02" 
              location="Asia East"
              status="online"
              type="Accelerated"
              lastPing="1 min ago"
              icon={Cpu}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Solutions for Every Need</h2>
            <p className="text-muted-foreground text-lg">
              Harness the power of our infrastructure with a wide range of services designed to meet any requirement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Cloud Compute" 
              description="Scalable virtual machines optimized for various workloads with flexible configurations and pay-as-you-go pricing."
              icon={Cpu}
            />
            <ServiceCard 
              title="Storage Solutions" 
              description="Reliable, durable storage options with automatic backups and built-in redundancy for maximum data protection."
              icon={HardDrive}
            />
            <ServiceCard 
              title="Database Services" 
              description="Fully managed relational and NoSQL database solutions with automated scaling, backups, and maintenance."
              icon={Database}
            />
            <ServiceCard 
              title="Network Infrastructure" 
              description="Global networking solutions including VPC, load balancing, DNS management, and content delivery."
              icon={Network}
            />
            <ServiceCard 
              title="Security & Compliance" 
              description="Comprehensive security tools and services to protect your data and meet global compliance requirements."
              icon={Shield}
            />
            <ServiceCard 
              title="Global Edge Network" 
              description="Low-latency content delivery and edge computing services through our globally distributed edge locations."
              icon={Globe}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for <span className="text-gradient">Performance & Reliability</span>
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Our infrastructure is designed from the ground up to deliver exceptional performance, 
                reliability, and security for applications of any scale.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                <FeatureCard 
                  icon={Zap}
                  title="High Performance"
                  description="Optimized infrastructure for maximum throughput and low latency"
                />
                <FeatureCard 
                  icon={TrendingUp}
                  title="Auto Scaling"
                  description="Dynamic resource allocation to match demand patterns"
                />
                <FeatureCard 
                  icon={Lock}
                  title="Enterprise Security"
                  description="Advanced security controls and encryption at rest and in transit"
                />
                <FeatureCard 
                  icon={Clock}
                  title="99.99% Uptime"
                  description="Industry-leading SLA guarantees for mission-critical applications"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 p-1 bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80" 
                    alt="Cloud Data Center"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur p-4 rounded-lg border border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-vyzic-600 flex items-center justify-center text-white">
                      <Server size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Powerful Infrastructure</p>
                      <p className="text-sm text-slate-400">Latest generation hardware for optimal performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center Map Section */}
      <section id="datacenter" className="py-20 bg-slate-950 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Data Center Network</h2>
            <p className="text-slate-300 text-lg">
              Deploy your applications closer to your users with our strategically located data centers around the world.
            </p>
          </div>
          
          <WorldMap />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="data-center-card">
              <h3 className="text-xl font-semibold mb-2">7+ Regions</h3>
              <p className="text-slate-400">Strategic global coverage for low latency access</p>
            </div>
            <div className="data-center-card">
              <h3 className="text-xl font-semibold mb-2">20+ Data Centers</h3>
              <p className="text-slate-400">State-of-the-art facilities with redundant systems</p>
            </div>
            <div className="data-center-card">
              <h3 className="text-xl font-semibold mb-2">99.99% Uptime</h3>
              <p className="text-slate-400">Industry-leading SLA for maximum reliability</p>
            </div>
            <div className="data-center-card">
              <h3 className="text-xl font-semibold mb-2">100 Gbps Network</h3>
              <p className="text-slate-400">Ultra-fast global backbone for optimal performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground text-lg">
              See why companies choose Vyzic for their mission-critical cloud infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Vyzic's cloud infrastructure has been a game-changer for our business. The performance and reliability exceeded our expectations, and their support team is responsive and knowledgeable."
              author="Sarah Johnson"
              position="CTO"
              company="TechNova Inc."
            />
            <TestimonialCard 
              quote="We migrated our entire platform to Vyzic Cloud and saw immediate improvements in performance and significant cost savings. Their auto-scaling features handled our traffic spikes flawlessly."
              author="Michael Chen"
              position="VP of Engineering"
              company="DataFlow Systems"
            />
            <TestimonialCard 
              quote="The global reach of Vyzic's data centers has allowed us to expand into new markets with confidence, knowing we can deliver low-latency experiences to our customers worldwide."
              author="Elena Rodriguez"
              position="Director of Operations"
              company="GlobalStream Media"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent, Scalable Pricing</h2>
            <p className="text-muted-foreground text-lg">
              Choose the right plan for your business needs with our flexible pricing options. 
              Only pay for what you use with no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="Startup"
              price="$49"
              description="Perfect for small projects and startups"
              features={[
                "2 virtual CPUs",
                "4 GB memory",
                "100 GB SSD storage",
                "1 TB data transfer",
                "Shared load balancer",
                "Community support"
              ]}
            />
            <PricingCard 
              title="Business"
              price="$199"
              description="Ideal for growing businesses"
              features={[
                "8 virtual CPUs",
                "16 GB memory",
                "500 GB SSD storage",
                "5 TB data transfer",
                "Dedicated load balancer",
                "24/7 priority support",
                "Auto-scaling capabilities"
              ]}
              isPrimary={true}
            />
            <PricingCard 
              title="Enterprise"
              price="Custom"
              description="Tailored solutions for large organizations"
              features={[
                "Custom CPU and memory",
                "Custom storage configuration",
                "Unlimited data transfer",
                "Advanced networking features",
                "Dedicated account manager",
                "Custom SLAs",
                "Compliance assistance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Have questions or ready to get started? Our team is here to help you find the perfect cloud solution for your needs.
              </p>
              
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-vyzic-400">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Sales Team</h3>
                    <p className="text-muted-foreground">For new customers and general inquiries</p>
                  </div>
                </div>
                <a href="mailto:sales@vyzic.com" className="text-vyzic-400 font-medium hover:underline">sales@vyzic.com</a>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-vyzic-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Technical Support</h3>
                    <p className="text-muted-foreground">24/7 assistance for existing customers</p>
                  </div>
                </div>
                <a href="mailto:support@vyzic.com" className="text-vyzic-400 font-medium hover:underline">support@vyzic.com</a>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-vyzic-700 to-vyzic-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-vyzic-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-vyzic-700/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Building on Vyzic Cloud Today
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust Vyzic for their mission-critical infrastructure. 
                Get started with $300 in free credits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-vyzic-600 hover:bg-white/90 text-lg px-8 py-6">
                  Create Free Account
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
