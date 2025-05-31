export const notFoundData = {
  title: "404",
  heading: "Page Not Found",
  subtitle: "Our AI couldn't locate this page in our neural network.",
  description: "The page you're looking for might have been moved, deleted, or never existed.",
  buttons: {
    primary: {
      text: "Back to Home",
      href: "/",
    },
    secondary: {
      text: "View Our Projects",
      href: "/projects",
    },
  },
  helpSection: {
    title: "Need Help?",
    description: "If you believe this is an error, please contact our support team.",
    contactText: "Contact Support",
    contactHref: "/contact",
  },
}

export const errorData = {
  heading: "Something Went Wrong",
  subtitle: "Our AI encountered an unexpected error.",
  description: "Don't worry, our neural networks are working to fix this issue.",
  buttons: {
    primary: {
      text: "Try Again",
    },
    secondary: {
      text: "Back to Home",
      href: "/",
    },
  },
  helpSection: {
    title: "Still Having Issues?",
    description: "If this error persists, please contact our support team with the error details.",
    actions: [
      {
        text: "Contact Support",
        href: "/contact",
      },
      {
        text: "View Our Work",
        href: "/projects",
      },
    ],
  },
  errorDetails: {
    title: "Error Details:",
    errorIdLabel: "Error ID:",
  },
}

export const globalErrorData = {
  heading: "Critical System Error",
  subtitle: "Our AI system encountered a critical error.",
  description: "Please refresh the page or contact support if the issue persists.",
  buttons: {
    primary: {
      text: "Try Again",
    },
    secondary: {
      text: "Go to Homepage",
    },
  },
  supportSection: {
    title: "Need Immediate Help?",
    description: "Contact our technical support team for assistance.",
    email: "support@ai-overlords.com",
  },
  errorDetails: {
    title: "Error Details:",
    errorIdLabel: "Error ID:",
  },
}

export type NotFoundData = typeof notFoundData
export type ErrorData = typeof errorData
export type GlobalErrorData = typeof globalErrorData
