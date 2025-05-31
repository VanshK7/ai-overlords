import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { MethodsSection } from "@/components/sections/methods-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { ProgrammingLanguagesSection } from "@/components/sections/programming-languages-section"
import { VideoHeroSection } from "@/components/sections/video-hero-section"

import {
  dataScienceServices,
  programmingLanguages,
} from "@/data/data-science"
import {
  // Simple Icons (Company/Framework logos) - only verified existing ones
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
} from "react-icons/si"

import {
  FaNetworkWired,
  FaLightbulb,
  FaCoffee,
  FaCube,
  FaMicrosoft,
  FaDatabase,
  FaChartBar,
  FaClock,
  FaSun,
  FaCloud,
} from "react-icons/fa"

import {
  // Game icons
  GiArtificialHive,
} from "react-icons/gi"

import { MdMemory, MdFunctions } from "react-icons/md"

import { TbNetwork, TbCircuitCell, TbSparkles } from "react-icons/tb"

import { BsGrid } from "react-icons/bs"



export const dataScienceTechStack = [
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
        name: "Apache Spark",
        icon: <FaLightbulb className="h-6 w-6 text-orange-600" />,
      },
      {
        name: "Hadoop",
        icon: <FaDatabase className="h-6 w-6 text-yellow-600" />,
      },
      {
        name: "Dask",
        icon: <FaClock className="h-6 w-6 text-blue-500" />,
      },
      {
        name: "Ray",
        icon: <FaSun className="h-6 w-6 text-yellow-500" />,
      },
      {
        name: "Kubeflow",
        icon: <FaCloud className="h-6 w-6 text-blue-600" />,
      },
    ],
  },
]

export const dataScienceMethods = [
  {
    title: "Non-NN machine learning",
    description: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Implementing supervised learning algorithms for effective classification and regression tasks, such as
            predicting customer churn, estimating property values, or forecasting product prices.
          </li>
          <li>
            Using unsupervised learning algorithms for clustering applications such as segmenting customers based on
            purchase history or detecting fraudulent financial transactions.
          </li>
          <li>
            Applying reinforcement learning to optimize decision-making influenced by interaction with the environment,
            such as recommendation systems or personalization engines.
          </li>
        </ul>
      </>
    ),
    image: "/images/network-visualization.png",
    imageAlt: "Network visualization representing machine learning",
  },
  {
    title: "Statistical",
    description: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Leveraging descriptive statistics, we summarize customer data, present outliers in stock prices, and
            identify patterns in user behavior.
          </li>
          <li>Employing ARIMA and ARIMAX, we forecast sales, prices, demand, and more.</li>
          <li>
            Using Bayesian inference, we predict possible outcomes such as equipment failure or disease diagnosis.
          </li>
        </ul>
      </>
    ),
    image: "/images/data-analysis.png",
    imageAlt: "Data analysis visualization",
    reversed: true,
  },
  {
    title: "Neural networks, including deep learning",
    description: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li>Employing convolutional and recurrent neural networks (including LSTM and GRU) for NLP tasks.</li>
          <li>Using autoencoders for tasks like analyzing medical images.</li>
          <li>Using generative adversarial networks (GANs) to generate images and using ML algorithms.</li>
          <li>
            Applying reinforcement learning (DQN) for optimizing energy consumption and recommending the best settings
            for manufacturing equipment.
          </li>
          <li>Using Bayesian deep learning to enhance speech recognition and translation accuracy.</li>
        </ul>
      </>
    ),
    image: "/images/neural-networks.png",
    imageAlt: "Neural networks visualization",
  },
]



export default function DataSciencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
   

            <VideoHeroSection
               title="Data science consulting services"
        subtitle="Solve is the new science and Big Data holds the answers"
              videoSrc="/videos/gen-ai.mp4"
              posterImage="/images/data-science-hero-bg.png"
                buttons={[
          {
            text: "Talk to our Data Science Expert",
            href: "/contact",
            primary: true,
          },
        ]}
            />
      

      {/* Services Section */}
      <ServicesSection
        title="Data science services we offer"
        services={dataScienceServices}
        ctaText="Talk to Our Experts"
        ctaLink="/contact"
      />

      {/* Methods Section */}
      <MethodsSection title="Methods and technologies we use" methods={dataScienceMethods} />

      {/* Tech Stack Section */}
      <TechStackSection title="Tech Stack" categories={dataScienceTechStack} initialCategory="Modules/Toolkits" />

      {/* Programming Languages Section */}
      <ProgrammingLanguagesSection
        title="Programming languages, APIs and frameworks that we use"
        languages={programmingLanguages}
      />
    </div>
  )
}
