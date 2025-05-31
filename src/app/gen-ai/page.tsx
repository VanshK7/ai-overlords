"use client"

import Image from "next/image"
import { Button } from "@/components/ui/custom-button"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import {
  nlpServices,
  developmentProcessSteps,
  genAIHeroData,
  genAIServicesData,
  genAICapabilitiesData as genAICapabilitiesDataAlias,
  genAIStatsData,
  aiModelsData,
  genAIProcessData,
} from "@/data/gen-ai"

import { TbBrandOpenai } from "react-icons/tb"
import { HiPhotograph, HiMicrophone, HiSparkles, HiColorSwatch } from "react-icons/hi"

import {
  // Simple Icons (Company/Framework logos) - only verified existing ones
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiOpenai,
  SiNvidia,
  SiFacebook,
  SiScikitlearn,
  SiGoogle,
} from "react-icons/si"

import {
  // Font Awesome icons
  FaBrain,
  FaMagic,
  FaProjectDiagram,
  FaNetworkWired,
  FaEye,
  FaCamera,
  FaCode,
  FaLightbulb,
  FaMusic,
  FaPalette,
  FaCoffee,
  FaRobot,
  FaCube,
  FaMicrosoft,
} from "react-icons/fa"

import { MdMemory, MdDevices, MdFunctions } from "react-icons/md"

import {
  // Tabler icons
  TbBrain,
  TbNetwork,
  TbCircuitCell,
  TbDeviceAnalytics,
  TbWand,
  TbSparkles,
} from "react-icons/tb"

import {
  // Bootstrap icons
  BsStars,
  BsBoundingBox,
  BsLayers,
  BsGrid,
} from "react-icons/bs"

import {
  // Game icons
  GiArtificialHive,
  GiNetworkBars,
  GiProcessor,
  GiBrain,
} from "react-icons/gi"

export const genAITechStack = [
  {
    name: "Deep Learning (DL) Frameworks",
    items: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="h-8 w-8 text-orange-500" />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="h-8 w-8 text-red-500" />,
      },
      {
        name: "Keras",
        icon: <SiKeras className="h-8 w-8 text-red-600" />,
      },
      {
        name: "Caffe",
        icon: <FaCoffee className="h-8 w-8 text-amber-700" />,
      },
      {
        name: "MXNet",
        icon: <TbNetwork className="h-8 w-8 text-blue-500" />,
      },
      {
        name: "Theano",
        icon: <MdFunctions className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "Chainer",
        icon: <FaNetworkWired className="h-8 w-8 text-red-500" />,
      },
      {
        name: "Microsoft Cognitive Toolkit (CNTK)",
        icon: <FaMicrosoft className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "Torch",
        icon: <FaLightbulb className="h-8 w-8 text-orange-500" />,
      },
      {
        name: "Deeplearning4j",
        icon: <FaBrain className="h-8 w-8 text-red-600" />,
      },
    ],
  },
  {
    name: "Modules/Toolkits",
    items: [
      {
        name: "OpenAI GPT",
        icon: <SiOpenai className="h-8 w-8 text-gray-700" />,
      },
      {
        name: "OpenAI DALL-E",
        icon: <SiOpenai className="h-8 w-8 text-gray-700" />,
      },
      {
        name: "NVIDIA StyleGAN",
        icon: <SiNvidia className="h-8 w-8 text-green-500" />,
      },
      {
        name: "Hugging Face Transformers",
        icon: <FaRobot className="h-8 w-8 text-yellow-500" />,
      },
      {
        name: "Facebook AI Research PyTorch Hub",
        icon: <SiFacebook className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "DeepMind Sonnet",
        icon: <FaMusic className="h-8 w-8 text-gray-700" />,
      },
      {
        name: "TensorFlow Probability",
        icon: <SiTensorflow className="h-8 w-8 text-orange-500" />,
      },
      {
        name: "Fast.ai",
        icon: <FaCube className="h-8 w-8 text-blue-500" />,
      },
      {
        name: "AllenNLP",
        icon: <FaCode className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "NVIDIA NeMo",
        icon: <SiNvidia className="h-8 w-8 text-green-500" />,
      },
    ],
  },
  {
    name: "Generative AI Models",
    items: [
      {
        name: "GPT-3",
        icon: <SiOpenai className="h-8 w-8 text-gray-700" />,
      },
      {
        name: "GPT-4",
        icon: <SiOpenai className="h-8 w-8 text-purple-600" />,
      },
      {
        name: "DALL-E",
        icon: <SiOpenai className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "VQ-VAE",
        icon: <BsGrid className="h-8 w-8 text-indigo-600" />,
      },
      {
        name: "VAE",
        icon: <BsLayers className="h-8 w-8 text-blue-500" />,
      },
      {
        name: "CycleGAN",
        icon: <TbWand className="h-8 w-8 text-green-600" />,
      },
      {
        name: "Pix2Pix",
        icon: <FaMagic className="h-8 w-8 text-purple-500" />,
      },
      {
        name: "WaveGAN",
        icon: <GiNetworkBars className="h-8 w-8 text-blue-400" />,
      },
      {
        name: "DeepArt",
        icon: <FaPalette className="h-8 w-8 text-purple-600" />,
      },
      {
        name: "DeepDream",
        icon: <BsStars className="h-8 w-8 text-orange-500" />,
      },
    ],
  },
  {
    name: "Neural Networks",
    items: [
      {
        name: "RNN",
        icon: <TbCircuitCell className="h-8 w-8 text-pink-500" />,
      },
      {
        name: "CNN",
        icon: <BsGrid className="h-8 w-8 text-green-500" />,
      },
      {
        name: "GAN",
        icon: <GiArtificialHive className="h-8 w-8 text-purple-600" />,
      },
      {
        name: "VAE",
        icon: <BsLayers className="h-8 w-8 text-blue-500" />,
      },
      {
        name: "Transformers",
        icon: <TbSparkles className="h-8 w-8 text-indigo-600" />,
      },
      {
        name: "LSTM Networks",
        icon: <MdMemory className="h-8 w-8 text-green-400" />,
      },
      {
        name: "Autoencoders",
        icon: <FaCode className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "RBM",
        icon: <TbNetwork className="h-8 w-8 text-gray-600" />,
      },
      {
        name: "DBN",
        icon: <GiBrain className="h-8 w-8 text-purple-600" />,
      },
      {
        name: "DRLN",
        icon: <TbBrain className="h-8 w-8 text-gray-700" />,
      },
    ],
  },
  {
    name: "Libraries",
    items: [
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="h-8 w-8 text-orange-500" />,
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="h-8 w-8 text-red-500" />,
      },
      {
        name: "Keras",
        icon: <SiKeras className="h-8 w-8 text-red-600" />,
      },
      {
        name: "OpenAI Gym",
        icon: <SiOpenai className="h-8 w-8 text-green-600" />,
      },
      {
        name: "Theano",
        icon: <MdFunctions className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "Caffe",
        icon: <FaCoffee className="h-8 w-8 text-amber-700" />,
      },
      {
        name: "MXNet",
        icon: <TbNetwork className="h-8 w-8 text-blue-500" />,
      },
      {
        name: "GPyTorch",
        icon: <SiPytorch className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="h-8 w-8 text-orange-500" />,
      },
      {
        name: "FastAI",
        icon: <FaCube className="h-8 w-8 text-blue-500" />,
      },
    ],
  },
  {
    name: "Image Classification Models",
    items: [
      {
        name: "AlexNet",
        icon: <FaEye className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "VGGNet",
        icon: <FaCamera className="h-8 w-8 text-purple-600" />,
      },
      {
        name: "ResNet",
        icon: <BsLayers className="h-8 w-8 text-red-600" />,
      },
      {
        name: "Inception",
        icon: <SiGoogle className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "MobileNet",
        icon: <MdDevices className="h-8 w-8 text-blue-500" />,
      },
      {
        name: "DenseNet",
        icon: <FaProjectDiagram className="h-8 w-8 text-green-600" />,
      },
      {
        name: "EfficientNet",
        icon: <TbDeviceAnalytics className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "Xception",
        icon: <BsBoundingBox className="h-8 w-8 text-red-600" />,
      },
      {
        name: "SqueezeNet",
        icon: <GiProcessor className="h-8 w-8 text-orange-600" />,
      },
      {
        name: "GoogLeNet",
        icon: <SiGoogle className="h-8 w-8 text-blue-600" />,
      },
    ],
  },
]

const getModelIcon = (iconType: string) => {
  switch (iconType) {
    case "openai":
      return <TbBrandOpenai className="h-5 w-5" />
    case "photograph":
      return <HiPhotograph className="h-5 w-5" />
    case "microphone":
      return <HiMicrophone className="h-5 w-5" />
    case "sparkles":
      return <HiSparkles className="h-5 w-5" />
    case "google":
      return <SiGoogle className="h-5 w-5" />
    case "colorSwatch":
      return <HiColorSwatch className="h-5 w-5" />
    default:
      return <TbBrandOpenai className="h-5 w-5" />
  }
}

export default function GenAIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Video Hero Section */}
      <VideoHeroSection
        title={genAIHeroData.title}
        subtitle={genAIHeroData.subtitle}
        videoSrc="/videos/gen-ai.mp4"
        posterImage="/images/ai-network-bg.jpeg"
        buttons={[
          {
            text: genAIHeroData.ctaText,
            href: "/contact",
            primary: true,
          },
        ]}
      />

      {/* NLP Services Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">{genAIServicesData.title}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {nlpServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-sm font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" variant="primary">
              {genAIServicesData.ctaText}
            </Button>
          </div>
        </div>
      </section>

      {/* Generative AI Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">{genAICapabilitiesDataAlias.title}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-gray-700">{genAICapabilitiesDataAlias.leftContent.description}</p>
              <Button href="/contact" variant="primary" className="mt-4">
                {genAICapabilitiesDataAlias.leftContent.ctaText}
              </Button>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold">{genAICapabilitiesDataAlias.rightContent.title}</h3>
              <p className="text-gray-700">{genAICapabilitiesDataAlias.rightContent.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="max-w-md">
              <h2 className="mb-4 text-3xl font-bold">{genAIStatsData.title}</h2>
              <p className="mb-6">{genAIStatsData.subtitle}</p>
              <Button href="/contact" variant="primary">
                {genAIStatsData.ctaText}
              </Button>
            </div>
            <div className="flex items-center">
              <Image
                src={genAIStatsData.image || "/placeholder.svg"}
                alt={genAIStatsData.imageAlt}
                width={400}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">{aiModelsData.title}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-gray-700">{aiModelsData.description}</p>
            </div>
            <div className="space-y-6">
              {aiModelsData.models.map((model, index) => (
                <div
                  key={model.id}
                  className={`rounded-lg border shadow-sm ${model.hasFullDescription ? "p-8" : "p-6"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 p-2 items-center justify-center rounded-full bg-primary text-black">
                      {getModelIcon(model.icon)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">{model.title}</h3>
                      {model.hasFullDescription && model.description && (
                        <p className="text-gray-700">{model.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStackSection title="Tech Stack" categories={genAITechStack} initialCategory="Generative AI Models" />

      {/* Development Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">{genAIProcessData.title}</h2>
          <p className="mb-12 max-w-3xl text-gray-700">{genAIProcessData.description}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {developmentProcessSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-gray-300">
                  <span className="text-lg font-medium text-gray-800">{step.number}</span>
                </div>
                <span className="text-center text-sm text-gray-700">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
