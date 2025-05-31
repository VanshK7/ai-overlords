import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { ExpertCTASection } from "@/components/sections/expert-cta-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { RoadmapSection } from "@/components/sections/roadmap-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import {developmentRoadmap } from "@/data/software-development"

import {
  // Simple Icons (Company/Framework logos) - only verified existing ones
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpenai,
  SiScikitlearn,
  SiGoogle,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si"

import {
  // Font Awesome icons
  FaBrain,
  FaMagic,
  FaNetworkWired,
  FaCode,
  FaLightbulb,
  FaCoffee,
  FaRobot,
  FaCube,
  FaMicrosoft,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa"

import { MdMemory, MdFunctions } from "react-icons/md"

import { TbNetwork, TbCircuitCell, TbSparkles } from "react-icons/tb"

import { BsGrid } from "react-icons/bs"

import {
  // Game icons
  GiArtificialHive,
} from "react-icons/gi"

// Import Lucide React icons for services and benefits
import {
  Eye,
  Code,
  Cpu,
  Zap,
  Users,
  MessageSquare,
  Database,
  Globe,
  Smartphone,
  Layers,
  Monitor,
  RefreshCw,
} from "lucide-react"

export const softwareServices = [
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Software Consulting",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "SaaS Development",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "AI/ML Services",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Mobile App Development",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "API Integration",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "IoT Services",
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Software Modernization",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web App Development",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "UI/UX Design",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Test Automation",
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Desktop App Development",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Digital Transformation",
  },
]

export const softwareBenefits = [
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Tailored Solutions for Your Business",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Cost-Effective Development",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Expertise and Experience",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Agile Development Approach",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Scalability and Flexibility",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Seamless Integration",
  },
]



export const softwareTechStack = [
  {
    name: "Modules/Toolkits",
    items: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="h-6 w-6 text-orange-500" />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="h-6 w-6 text-red-500" />,
      },
      {
        name: "Keras",
        icon: <SiKeras className="h-6 w-6 text-red-600" />,
      },
      {
        name: "Caffe",
        icon: <FaCoffee className="h-6 w-6 text-amber-700" />,
      },
      {
        name: "MXNET",
        icon: <TbNetwork className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Theano",
        icon: <MdFunctions className="h-6 w-6 text-blue-600" />,
      },
      {
        name: "Chainer",
        icon: <FaNetworkWired className="h-6 w-6 text-red-500" />,
      },
      {
        name: "DeeplearningKit",
        icon: <FaCube className="h-6 w-6 text-gray-600" />,
      },
      {
        name: "Torch",
        icon: <FaLightbulb className="h-6 w-6 text-orange-500" />,
      },
      {
        name: "Microsoft Cognitive Toolkit",
        icon: <FaMicrosoft className="h-6 w-6 text-blue-600" />,
      },
    ],
  },
  {
    name: "Generative AI Models",
    items: [
      {
        name: "GPT-4",
        icon: <SiOpenai className="h-6 w-6 text-purple-600" />,
      },
      {
        name: "DALL-E",
        icon: <SiOpenai className="h-6 w-6 text-blue-600" />,
      },
      {
        name: "Stable Diffusion",
        icon: <TbSparkles className="h-6 w-6 text-purple-500" />,
      },
      {
        name: "Midjourney API",
        icon: <FaMagic className="h-6 w-6 text-indigo-600" />,
      },
      {
        name: "Claude",
        icon: <FaRobot className="h-6 w-6 text-orange-600" />,
      },
      {
        name: "Bard",
        icon: <SiGoogle className="h-6 w-6 text-blue-600" />,
      },
      {
        name: "Whisper",
        icon: <SiOpenai className="h-6 w-6 text-green-600" />,
      },
      {
        name: "Gemini",
        icon: <SiGoogle className="h-6 w-6 text-purple-600" />,
      },
      {
        name: "Llama",
        icon: <FaBrain className="h-6 w-6 text-blue-700" />,
      },
      {
        name: "Mistral",
        icon: <FaCode className="h-6 w-6 text-gray-600" />,
      },
    ],
  },
  {
    name: "Neural Networks",
    items: [
      {
        name: "CNN",
        icon: <BsGrid className="h-6 w-6 text-green-500" />,
      },
      {
        name: "RNN",
        icon: <TbCircuitCell className="h-6 w-6 text-pink-500" />,
      },
      {
        name: "LSTM",
        icon: <MdMemory className="h-6 w-6 text-green-400" />,
      },
      {
        name: "GAN",
        icon: <GiArtificialHive className="h-6 w-6 text-purple-600" />,
      },
      {
        name: "Transformer",
        icon: <TbSparkles className="h-6 w-6 text-indigo-600" />,
      },
    ],
  },
  {
    name: "Libraries",
    items: [
      {
        name: "NumPy",
        icon: <MdFunctions className="h-6 w-6 text-blue-600" />,
      },
      {
        name: "Pandas",
        icon: <FaDatabase className="h-6 w-6 text-green-600" />,
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="h-6 w-6 text-orange-500" />,
      },
      {
        name: "Matplotlib",
        icon: <FaChartBar className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "SciPy",
        icon: <MdFunctions className="h-6 w-6 text-purple-600" />,
      },
    ],
  },
  {
    name: "Frameworks",
    items: [
      {
        name: "React",
        icon: <SiReact className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Angular",
        icon: <SiAngular className="h-6 w-6 text-red-600" />,
      },
      {
        name: "Vue.js",
        icon: <SiVuedotjs className="h-6 w-6 text-green-600" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-6 w-6 text-gray-800" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="h-6 w-6 text-gray-600" />,
      },
    ],
  },
]


export default function SoftwareDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      
          <VideoHeroSection
              title="Custom Software Development Company"
        quote={{
          text: "Software is eating the world",
          author: "Marc Andreessen",
        }}
        buttons={[
          {
            text: "Let's Build your Solution",
            href: "/contact",
            primary: true,
          },
        ]}
              videoSrc="/videos/software-development.mp4"
              posterImage="/images/bg.png"
            />
      

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Expert Custom Software Development Services</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {softwareServices.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center">{service.icon}</div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {softwareServices.slice(6).map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center">{service.icon}</div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="group flex h-14 items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105"
            >
              <span className="px-6 pr-4 text-lg font-medium">Schedule a Demo</span>
              <div className="ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection
        title="Benefits of Choosing Our Custom Software Development Services"
        benefits={softwareBenefits}
      />

      {/* Expert CTA Section */}
      <ExpertCTASection
        title="Want to speak with a Very expert?"
        subtitle="Let's talk about your vision for a powerful IoT solution."
        buttonText="Book a Meeting"
        buttonLink="/contact"
        image="/images/iot-illustration.png"
      />

      {/* Roadmap Section */}
      <RoadmapSection title="The Roadmap to Our Custom Software Development Success" steps={developmentRoadmap} />

      {/* Tech Stack Section */}
      <TechStackSection title="Tech Stack" categories={softwareTechStack} initialCategory="Modules/Toolkits" />
    </div>
  )
}
