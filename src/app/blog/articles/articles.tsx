import { Image } from "@radix-ui/react-avatar";

export type Image = {
  id: number;
  url: string;
  alt?: string;
  caption?: string;
  captionURL?: string;
  props?: {
    variant: string;
  };
};

export type Paragraph = {
  id: number;
  text?: string;
  image?: Image;
  primary_title?: string;
  //   secondary_title?: string;
};
export type Card = {
  image: Image;
  title: string;
  date: string;
};

export type Blog = {
  id: number;
  timestamp: string;
  title: string;
  subtitle?: string;
  paragraphs: Paragraph[];
  cover: Image;
  type: string;
  author: {
    name: string;
    image: Image;
  };
  slug: string;
  meta?: {
    description?: string;
  };
};
export const blogs: Blog[] = [
  {
    id: 1,
    timestamp: "March 25, 2024",
    title:
      "Claude Haiku can substitute GPT-4 in 95% of AI tasks at 4% cost",
    slug: "claude-haiku-vs-gpt-4",
    type: "MODEL",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog1/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    paragraphs: [
      {
        id: 1,
        primary_title: "TL;DR",
        text: "\n* We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. \n* Haiku offers faster response times, lower costs, and comparable performance. \n* Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. \n* Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations.\n\n This article presents the details of our tests and their results, highlighting Haiku's strengths.",
      },
      {
        id: 2,
        primary_title: "Intro",
        text: "Claude 3 Haiku: Haiku is Anthropic's newest, fastest, and most streamlined model, delivering near-instant replies. \n\n GPT-4-Turbo: OpenAI's flagship model, renowned for its versatility in tasks ranging from writing to programming, has set the benchmark for excellence over the past year.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog1/anthropic_family.jpg",
          caption: "Anthropic's family of models",
          captionURL: "https://anthropic.com/",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        primary_title: "Test results",
        text: "We created a knowledge base for a virtual AI company and asked most of the questions based on this information. \n\n After running almost 100 different prompts, here are the results of each model's performance: \n\n **Speed Comparison:** \n\n - Haiku's average generation time is 78% faster than GPT-4-preview-0125 (2.283s vs 10.475s) \n- Haiku's time to first token (TTFT) is 58% faster than GPT-4-preview-0125 (0.45s vs 1.07s)",
        image: {
          id: 1,
          url: "/images/blog_Images/blog1/speed.jpg",
          caption: "Speed comparison",
          captionURL: "",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        text: "**Cost comparison:** \n\n - Haiku's average cost per request is 95% lower than GPT-4 ($0.00032 vs $0.007) \n- Input Pricing: Haiku - $0.25 / MTok, GPT-4-Turbo - $10.00 / MTok \n- Output Pricing: Haiku - $1.25 / MTok, GPT-4-Turbo - $30.00 / MTok",
        image: {
          id: 1,
          url: "/images/blog_Images/blog1/cost.jpg",
          caption: "Cost comparison",
          captionURL: "",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        text: `**Evaluation tests:** \n\n We conducted evaluation tests on Keywords AI, a critical component in natural language processing tasks. The results are as follows: \n\n - GPT-4-0125-preview: Context Precision: 0.96, Faithfulness: 0.97, Readability: 0.85, Relevance: 0.94 \n- Claude-3-haiku: Context Precision: 0.92, Faithfulness: 0.91, Readability: 0.88, Relevance: 0.94 \n- Haiku demonstrates better readability than GPT-4-preview-0125 (0.88 vs 0.85) \n- Both models have similar performance in context precision, faithfulness, and relevance \n\n **Interesting Observation:** \n\n When using the "Airportcode extractor" prompt from OpenAI's prompt library, GPT-4 couldn't solve the problem, while Haiku successfully extracted the airport codes.`,
      },
      {
        id: 5,
        primary_title: "Conclusion",
        text: "Based on our extensive testing and analysis, Claude 3 Haiku has proven to be a strong contender against GPT-4 in various AI tasks.\n\n With its faster response times, lower cost per request, and comparable performance in key evaluation metrics, Haiku could potentially substitute GPT-4 in most AI applications.\n\nAs AI continues to advance, models like Claude 3 Haiku will play a crucial role in shaping the future of natural language processing and AI-driven solutions.",
      },
      {
        id: 6,
        primary_title: "How You Can Run Your Own Tests",
        text: 'Visit [Keywords AI](https://keywordsai.co) and click on "Dashboard" \n\n Choose the models you want to test in [Playground](https://docs.keywordsai.co/features/prompt/test&compare) and run requests! \n\n Check / Export your every single request on the[ Request page](https://docs.keywordsai.co/features/monitoring/logging). \n\n Turn on the [evaluations](https://docs.keywordsai.co/features/evaluation/overview) you want to run and see the result! \n\n Best of all, integrating Keywords AI into your codebase is a snap, requiring only a couple of lines of code. \n\n This means you can quickly and effortlessly incorporate state-of-the-art AI models into your projects and applications.',
      },
    ],
  },
  {
    id: 2,
    timestamp: "June 20, 2024",
    title: "The ten LLM metrics you need to monitor (and why)",
    slug: "ten-llm-metrics-need-monitor",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog2/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    meta: {
      description:
        "Effective LLM monitoring is crucial for delivering high-quality AI applications while managing costs. Focus on: Accuracy Monitoring, Cost & Latency, Outage Management.   ",
    },
    paragraphs: [
      {
        id: 1,
        primary_title: "TL;DR",
        text: "Effective LLM monitoring is crucial for delivering high-quality AI applications while managing costs. Focus on: \n- **Accuracy Monitoring**: Combine human evaluation and AI scoring to ensure relevant, readable outputs. \n- **Cost & Latency**: Use comprehensive tools to track expenses and optimize performance. \n- **Outage Management**: Implement in-house alerts or third-party solutions for seamless fallback and uptime.",
      },
      {
        id: 2,
        primary_title: "What is LLM monitoring?",
        text: "LLM monitoring involves tracking the performance of LLM applications using a variety of evaluation metrics and techniques. \n\n It ensures models deliver accurate, reliable results and provides observability for developers, enabling them to identify and address issues promptly.",
      },
      {
        id: 3,
        primary_title: "What are the common metrics with LLM applications?",
        text: "**Accuracy** \n\n Ensuring high accuracy in LLM applications can be challenging due to various factors: \n- **[Hallucination](https://docs.keywordsai.co/features/evaluation/generation/faithfulness):** LLMs sometimes generate information that appears plausible but is entirely fabricated. This can mislead users and reduce trust in the application. \n- **[Answer Relevance](https://docs.keywordsai.co/features/evaluation/generation/answer-relevance)**: The model may provide off-topic responses or not directly addressing the user’s query, affecting the application's usefulness. \n- **[Readability](https://docs.keywordsai.co/features/evaluation/generation/flesch-kincaid)**: The generated text may be grammatically correct but awkward or difficult to read, hampering user understanding and engagement.",
      },
      {
        id: 4,
        text: "**Cost** \n\n Cost is a significant factor in LLM applications. Selecting the most appropriate model for your AI product can save thousands of dollars monthly. \n\n Occasionally, some requests can be costly, costing $1-5 each. Analyzing and managing these costly requests is crucial to control expenses effectively.",
      },
      {
        id: 5,
        text: "**Latency** \n\n Latency is crucial, especially in real-time applications like voice AI. Delays can hinder user experience and reduce effectiveness. \n\n Key aspects include: \n\n - **Time to First Token (TTFT):** The time it takes for the model to generate the first token after receiving a request. A shorter TTFT enhances the perceived responsiveness of the application. \n- **Time Per Output Token (TPOT):** The time taken to generate each subsequent token after the first one. Reducing TPOT can improve the overall generation speed. \n- **Total Generation Time:** The cumulative time required to generate the entire response. \n- **Speed:** This measures how many tokens the model can generate per second. Higher speed indicates better performance and a smoother user experience. \n- Latency Calculation: Latency is calculated as TTFT + (TPOT * number of tokens to be generated). Managing both TTFT and TPOT is essential to minimize overall latency.",
      },
      {
        id: 6,
        text: "**Outage from providers** \n\n With many LLM providers like OpenAI, Anthropic, and Mistral, outages can occur, causing downtime for your apps.\n\n These interruptions can disrupt the availability of LLM applications, affecting business operations and user satisfaction.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/outage.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 7,
        primary_title: "How to monitor these metrics?",
        text: "**Accuracy**\n\n To ensure high output quality in LLM applications, various methods can be employed: \n\n - **Human Evaluation:** This aligns with user preferences but can introduce bias and subjectivity. Using a diverse group of evaluators helps mitigate these issues but could be costly. \n- **[LLM-as-a-Judge](https://docs.keywordsai.co/features/evaluation/overview)**: The most cost-effective and efficient way to evaluate numerous inferences. However, it might yield inaccurate evaluation outcomes due to LLM performance limitations.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/eval.jpg",
          caption: "LLM Output evaluations on Keywords AI",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 8,
        text: "**Cost & Latency**\n\n Managing both cost and latency effectively requires a comprehensive dashboard that tracks expenses and performance metrics.\n\n - Providers’ Native Tracking: Limited to cost tracking without latency metrics. Only offers a monthly view and requires accessing different dashboards if multiple LLMs are used. It doesn’t provide specific costs or latency metrics for individual inferences.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/dashboard.jpg",
          caption: "OpenAI dashboard",
          captionURL: "https://platform.openai.com/playground",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        text: "- Keywords AI Solution: Offers a custom timeline, consolidates costs of different LLMs into a single chart, and allows detailed analysis of individual requests to see exact costs. Additionally, it provides both overall and specific latency metrics for each request.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/keywords_dashboard.jpg",
          caption: "Keywords AI LLM dashboard",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/log.jpg",
          caption: "Keywords AI Log",
          captionURL: "https://docs.keywordsai.co/features/monitoring/logging",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        text: "**Outage from providers**\n\n No one wants downtime for their product! Ensuring continuous availability of LLM apps is crucial for maintaining user satisfaction and business operations. \n- **Build your own alert system:** Develop an in-house solution to monitor LLM providers and automatically switch to backups during outages. This offers full control but requires significant time —20+ hours for setup and 30+ hours for debugging. \n- **[Auto fallback to other LLMs](https://docs.keywordsai.co/features/generation/fallbacks):** Use a third-party solution for real-time outage notifications and automatic fallback. This approach minimizes downtime without extensive setup, ensuring 100% uptime by seamlessly switching to fallback models.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/alert.jpg",
          caption: "Keywords AI alerts & fallback",
          captionURL:
            "https://docs.keywordsai.co/features/generation/fallbacks",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 11,
        primary_title: "Learn more about LLM monitoring",
        text: "[Keywords AI](https://keywordsai.co) is a unified developer platform where you can [call 150+ LLMs using the OpenAI SDK with one API key](https://docs.keywordsai.co/integration/development-frameworks/openai-sdk) and get insights into your AI products. This platform provides comprehensive insights into your AI products, helping you build better AI solutions with complete observability.\n\n With just two lines of code, you can enhance your AI products, track performance, manage costs, and ensure reliability. Explore Keywords AI to streamline your LLM management and elevate your AI capabilities.",
      },
    ],
  },
  {
    id: 3,
    timestamp: "June 21, 2024",
    title: "Claude-3.5-Sonnet vs. GPT-4o: which is better?",
    slug: "claude-3.5-vs-gpt-4o",
    type: "MODEL",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog3/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude-3.5-Sonnet and OpenAI's GPT-4o across various AI tasks. Claude-3.5-Sonnet excels in context precision, faithfulness, and readability.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    paragraphs: [
      {
        id: 1,
        primary_title: "TL;DR",
        text: "- We compared Anthropic's Claude-3.5-Sonnet and OpenAI's GPT-4o across various AI tasks. \n- Claude-3.5-Sonnet excels in context precision, faithfulness, and readability. \n- GPT-4o is faster and better for voice AI startups due to lower latency and quicker time to first token (TTFT). \n- I'll show you how to test and compare these models in just 1 minute using [Keywords AI](https://keywordsai.co).",
      },
      {
        id: 2,
        primary_title: "Intro",
        text: "Anthropic released its latest flagship LLM Claude-3.5-Sonnet on Jun 20, 2024. It’s 2x faster than Claude-3-Sonnet at 20% of the cost and better performance in every mainstream LLM benchmark. \n\n OpenAI released its most intelligent model, GPT-4o, on May 13, 2024. It’s 2x faster and 50% cheaper than GPT-4 Turbo.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/anthropic.jpg",
          caption: "Anthropic's family of models",
          captionURL: "https://anthropic.com/",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        primary_title: "Basic Comparison",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/basic.jpg",
          caption: "",
          captionURL: "",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        primary_title: "Benchmark Comparison",
        text: "In benchmark evaluations, Claude 3.5 Sonnet consistently outperforms GPT-4o in areas such as graduate-level reasoning, undergraduate-level knowledge, coding, multilingual math, and reasoning over text.\n\n While GPT-4o shows a slight advantage in math problem-solving, Claude 3.5 Sonnet generally demonstrates superior performance across most benchmarks, making it a strong choice for diverse tasks.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/benchmark.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 5,
        primary_title: "Test results",
        text: "We still used our virtual AI company knowledge base and asked questions based on this knowledge base.",
      },
      {
        id: 6,
        primary_title: "Speed Comparison",
        text: "**Latency & Tokens** \n\n - GPT-4o's average latency is 24% faster than Claude-3.5-Sonnet (7.5226s vs 9.3055s) \n- GPT-4o even has more output tokens than Sonnet (431 tokens/request vs 260 tokens/request)",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/latency.jpg",

          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "**Speed & TTFT (Time to First Token)** \n\n - GPT-4o's average TTFT is 2x faster than Claude-3.5-Sonnet (0.5623s vs 1.2341s) \n- GPT-4o’s average speed is also 2x faster than Claude-3.5-Sonnet (56T/s vs 28/2T/s)",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/ttft.jpg",

          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Evaluation tests",
        text: "We conducted evaluation tests on [Keywords AI](https://keywordsai.co), a critical component in natural language processing tasks. The results are as follows:",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/eval.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        text: "Evaluation tests showed that Claude-3.5-Sonnet outperformed GPT-4o in context precision, faithfulness, and readability, while GPT-4o was slightly better in relevance.",
      },
      {
        id: 10,
        primary_title: "Coding tests",
        text: "Claude-3.5-Sonnet and GPT-4o excel in coding tasks, solving basic problems and complex issues like machine learning algorithms and debugging.\n\n Claude-3.5-Sonnet provides faster responses and detailed explanations, while GPT-4o excels in algorithmic tasks and performance optimization.\n\n Both models effectively handle bugs and support multiple programming languages.",
      },
      {
        id: 11,
        primary_title: "Conclusion",
        text: "Based on our extensive testing and analysis, both Claude-3.5-Sonnet and GPT-4o excel in various AI tasks, with Claude-3.5-Sonnet leading in context precision, faithfulness, and readability.\n\n However, GPT-4o's faster speed and time to first token (TTFT) make it a superior choice for voice AI startups where latency is critical.\nn As AI technology continues to evolve, choosing the right model will depend on the specific needs of each application, but both models are strong candidates for driving innovation in natural language processing and AI solutions.",
      },
    ],
  },
  {
    id: 4,
    timestamp: "June 24, 2024",
    title: "LLM Benchmarking: A complete guide to evaluating LLM in 2024",
    slug: "llm-benchmarking",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog4/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. Haiku offers faster response times, lower costs, and comparable performance. Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations. This article presents the details of our tests and their results, highlighting Haiku's strengths.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    paragraphs: [
      {
        id: 1,
        text: "New LLMs are released almost weekly. These models, whether open-sourced or flagship, each have unique strengths. Some excel in generating low-cost conversational chatbots, while others are adept at coding or producing high-quality written content.\n\n In this blog, we will delve into using benchmarks to evaluate LLMs. You'll learn how to compare the performance of models across different benchmarks, enabling you to select the most suitable LLM for your specific AI applications.\n\n Before we dive into the benchmarks, check the LLM Leaderboard if you need the best overall model, regardless of cost or speed. It highlights top-performing models, helping you quickly find the most advanced options.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/rank.jpg",
          caption: "LLM Leaderboard",
          captionURL:
            "https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 2,
        text: "At the end of this blog, I'll demonstrate how to utilize all mainstream LLMs through a single platform or API call. \n- Mathematical Benchmarks \n- General Knowledge & Question Answering Benchmarks \n- Coding Benchmarks \n-  Logical Reasoning Benchmarks",
      },
      {
        id: 3,
        primary_title: "Mathematical Benchmarks",
        text: "**[GSM-8K (Grade School Math 8K)](https://github.com/openai/grade-school-math)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/gsm8k.jpg",
          caption: "GSM8K",
          captionURL:
            "https://paperswithcode.com/sota/arithmetic-reasoning-on-gsm8k",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        text: "GSM-8K tests a model's ability to solve grade-school level math problems, focusing on numerical reasoning and understanding of elementary concepts. The dataset includes 8,500 math word problems that require 2 to 8 steps to solve, using basic arithmetic, algebra, and geometry. The final score is the percentage of correctly answered questions.",
      },
      {
        id: 5,
        text: "**[MATH](https://github.com/hendrycks/math)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/math.jpg",
          caption: "MATH",
          captionURL:
            "https://paperswithcode.com/sota/math-word-problem-solving-on-math",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        text: "MATH is a benchmark with 12,500 challenging competition-level math problems, each accompanied by a detailed step-by-step solution. It assesses a model's ability to solve advanced math problems across five difficulty levels and seven sub-disciplines, including algebra, calculus, and statistics. The benchmark emphasizes the importance of detailed answer derivations and explanations.",
      },
      {
        id: 7,
        primary_title: "General Knowledge & Question Answering Benchmarks",
        text: "**[MMLU: Better Benchmarking for LLM Language Understanding](https://arxiv.org/pdf/2009.03300)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/mmlu.jpg",
          caption: "MMLU",
          captionURL:
            "https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        text: "MMLU is a comprehensive benchmark designed to evaluate an LLM’s natural language understanding (NLU) and problem-solving abilities across diverse subjects. It comprises 15,908 questions divided into 57 tasks, covering STEM, humanities, social sciences, and other topics from elementary to professional levels. This benchmark assesses a model's ability to integrate and apply knowledge nuancedly rather than just factual recall.\n\n **Limitations of MMLU** \n\n MMLU has some limitations, including missing context in questions, ambiguous or incorrect answers, and errors in the dataset. Additionally, there is limited information on how the corpus was constructed, underscoring the need for more reliable benchmarking standards",
      },
      {
        id: 9,
        text: "**[TriviaQA](https://arxiv.org/pdf/2109.07958)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/trivia.jpg",
          caption: "TriviaQA",
          captionURL:
            "https://paperswithcode.com/sota/question-answering-on-triviaqa",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        text: "TriviaQA measures a language model's ability to generate truthful answers. It includes questions that humans often answer incorrectly due to false beliefs. Models must avoid replicating these errors. Larger models can be less truthful due to ingesting more false information. The challenge is to use provided documents to find and verify correct answers to trivia questions across various topics.",
      },
      {
        id: 11,
        primary_title: "Coding Benchmarks",
        text: "**[HumanEval](https://github.com/openai/human-eval)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/humaneval.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 12,
        text: "HumanEval, created by OpenAI, evaluates LLMs' ability to generate functional and correct Python code. It includes 164 hand-crafted programming challenges with unit tests and uses the pass@k metric to assess code correctness. This benchmark is crucial for measuring LLM performance in code generation tasks. \n\n **Limitations of HumanEval** \n\n Despite its significance, HumanEval has limitations. It mainly focuses on algorithmic problems, missing the complexity of real-world tasks. It doesn't test for writing tests, code explanation, or docstring generation; its unit tests can be weak. Additionally, biases and potential data exposure during training can overestimate model performance.",
      },
      {
        id: 13,
        text: "**[MBPP (Mostly Basic Python Programming)](https://arxiv.org/pdf/2108.07732)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/mbpp.jpg",
          caption: "MBPP",
          captionURL: "https://paperswithcode.com/sota/code-generation-on-mbpp",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 14,
        text: "The Mostly Basic Programming Problems (MBPP) benchmark evaluates LLMs' ability to generate short Python programs from natural language descriptions. The dataset includes 974 entry-level programming tasks, each with a task description, code solution, and three automated test cases for functional correctness. MBPP covers more problems than HumanEval and consistently includes three input/output examples formatted as assert statements. This makes it a valuable tool for assessing both the correctness and efficiency of code generated by LLMs.",
      },
      {
        id: 15,
        primary_title: "Logical Reasoning Benchmarks",
        text: "**[HellaSwag](https://github.com/rowanz/hellaswag)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/hellaswag.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 16,
        text: "HellaSwag tests LLMs' commonsense reasoning through sentence completion tasks. Each question includes a video caption segment and four possible endings, with only one correct. Designed to challenge models, the scenarios are easy for humans but difficult for LLMs. Created using adversarial filtering, HellaSwag ensures complex and deceptive wrong answers to test models' everyday knowledge understanding.\n\n **Limitations of HellaSwag**  \n\n HellaSwag struggles with nuanced contextual ambiguity, which can affect the accuracy of its results. Moreover, it focuses on general knowledge and does not adequately test commonsense reasoning in specialized domains.",
      },
      {
        id: 17,
        text: "**[AI2 Reasoning Challenge (ARC)](https://arxiv.org/abs/1803.05457)** \n\n The AI2 Reasoning Challenge (ARC) is a QA benchmark designed to test LLMs' knowledge and reasoning skills using 7787 multiple-choice science questions for grades 3 to 9. Divided into Easy and Challenge sets, these questions cover various types of knowledge, including factual, spatial, experimental, and algebraic.\n\n Unlike benchmarks like SQuAD, ARC requires models to use distributed evidence and reasoning rather than merely extracting answers from text. This makes ARC a more comprehensive and difficult benchmark for evaluating language models. However, it only has scientific questions.",
      },
      {
        id: 18,
        primary_title: "Where to Evaluate and Integrate Best-in-Class LLMs?",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/playground.jpg",
          caption: "Keywords AI",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 19,
        text: "After selecting your desired LLMs based on specific benchmarks, testing them to ensure they meet your requirements is important, as benchmarks can have biases or be incomplete. Visit the Keywords AI LLM playground to compare different models' performance. \n\n Once you manually evaluate the models, you can integrate them into your codebase using the Keywords AI OpenAI-compatible API.",
      },
    ],
  },
  {
    id: 5,
    timestamp: "June 26, 2024",
    title: "How to stop LLM hallucinations?",
    slug: "stop-llm-hallucinations",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog5/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. Haiku offers faster response times, lower costs, and comparable performance. Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations. This article presents the details of our tests and their results, highlighting Haiku's strengths.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    paragraphs: [
      {
        id: 1,
        primary_title: "What are LLM hallucinations?",
        text: "Hallucinations in LLMs occur when they generate incorrect, nonsensical, or irrelevant content. These issues arise from the models' reliance on statistical patterns rather than true understanding, leading to misinformation and reducing trust in their outputs. Addressing these hallucinations is crucial for improving the accuracy and reliability of LLMs.",
      },
      {
        id: 2,
        primary_title: "Why LLMs hallucinate",
        text: "- **Ambiguous Prompts:** When prompts are too broad or vague, LLMs may misinterpret the user's intentions, leading to irrelevant or incorrect content generation. \n- **Insufficient Training Data:** LLMs trained on small or low-quality datasets may lack a robust understanding of language relationships, leading to inaccurate or irrelevant outputs.\n- **Lack of domain knowledge:** LLMs may produce hallucinations when they encounter topics outside their training data's scope, leading to gaps in understanding and erroneous information.",
      },
      {
        id: 3,
        primary_title: "How to detect LLM hallucinations?",
        text: "- **Human evaluation:** Manual review by people can effectively identify inaccuracies and irrelevant information in LLM outputs. However, this method is time-consuming and subject to human bias, making it less practical for large-scale evaluations.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog5/hallucination.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 4,
        text: "- **LLM-as-a-Judge:** An LLM evaluates another LLM's outputs by measuring consistency or rating them on a scale. This automates detection but depends on the evaluator model's accuracy.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog5/evaluation.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 5,
        primary_title: "Ways to Stop LLM Hallucinations",
        text: "- **Advanced Prompting** \n- **Retrieval Augmented Generation (RAG)**  \n- **Fine-tuning** ",
      },
      {
        id: 6,
        primary_title: "Advanced Prompting",
        image: {
          id: 1,
          url: "/images/blog_Images/blog5/prompt.jpg",
          caption: "Keywords AI Prompts management",
          captionURL: "https://platform.keywordsai.co/platform",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: 'Advanced prompting techniques guide LLMs to generate more accurate and coherent responses. Using specific, detailed prompts helps reduce irrelevant or incorrect outputs. Instructional prompts with clear examples of the desired format and style further align the model\'s responses with the expected outcome. \n\n Prompt engineering, the design, and refinement of instructions is crucial for reliable results. Explicit instructions and contextual cues in prompts reduce ambiguity, while system prompts like "Please only provide accurate and verifiable information" ensure the model produces trustworthy content. \n\n Utilizing prompt management tools can also be beneficial for creating high-quality prompts. There are many such tools available that effectively test and refine prompts, helping to achieve the best possible results.',
      },
      {
        id: 8,
        primary_title: "Retrieval Augmented Generation (RAG)",
        text: "Retrieval-augmented generation (RAG) enhances the accuracy and relevance of LLM outputs by combining generative capabilities with information retrieval methods. This approach grounds the model's responses in real, verifiable data, reducing the likelihood of hallucinations.\n\n Despite its benefits, challenges remain in ensuring LLMs do not produce content misaligned with the retrieved information. Tools like the Retrieval-Augmented Generation Benchmark (RGB) and RAGTruth are instrumental in addressing these challenges, helping quantify and minimize hallucinations by providing comprehensive evaluation frameworks.\n\n RAG is particularly useful in applications such as question-answering chatbots, search engines, and knowledge bases, where accuracy and context awareness are crucial. RAG ensures real-time accuracy and relevance in responses by integrating a retrieval system that searches a vector database for relevant data. This method also includes extending prompts with additional context from databases or APIs, further reducing hallucinations and enhancing the reliability of LLM outputs.",
      },
      {
        id: 8,
        primary_title: "Fine-Tuning",
        text: "Fine-tuning adjusts the learned patterns of an LLM to align closely with the specific nuances, vocabulary, and factual information of a new context, improving accuracy and relevance. By training the LLM on a curated dataset, fine-tuning updates its knowledge base, mitigating the propagation of errors or outdated information from its broader pretraining.\n\nThis process enhances the model's ability to generate factually correct, contextual, and coherent responses within a specific domain, significantly reducing the likelihood of hallucinations.\n\n Fine-tuning is particularly effective for standardized tasks with sufficient training data. It involves collecting many high-quality prompt/completion pairs and experimenting with different foundation models and hyperparameters, such as learning rate and number of epochs, to achieve the best results for your use case. This focused approach refines the model’s precision and minimizes its tendency to generate incorrect or baseless information, ensuring more reliable outputs.",
      },
      {
        id: 9,
        primary_title: "Conclusion",
        text: "To effectively address LLM hallucinations, it's essential to tackle root causes such as ambiguous prompts, insufficient training data, and gaps in domain knowledge. Detection methods like human evaluation and LLM-based assessment offer varying degrees of reliability and scalability.\n\n Mitigation strategies involve advanced prompting for clarity, retrieval augmented generation (RAG) to bolster accuracy with external data, and fine-tuning to tailor models to specific contexts, collectively enhancing the reliability and trustworthiness of AI-generated outputs.",
      },
    ],
  },
  {
    id: 6,
    timestamp: "June 28, 2024",
    title: "5 best LLM playgrounds in 2024",
    subtitle:
      "Discover the Top Tools for Experimenting with Large Language Models in 2024",
    slug: "5-best-llm-playgrounds",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog6/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. Haiku offers faster response times, lower costs, and comparable performance. Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations. This article presents the details of our tests and their results, highlighting Haiku's strengths.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    paragraphs: [
      {
        id: 1,
        text: "Exploring the capabilities of LLMs has become more accessible and exciting in 2024, thanks to various innovative playgrounds. Whether you're a developer, researcher, or AI enthusiast, having the right platform can significantly enhance your work with LLMs. \n\n In this blog, we'll introduce you to the 5 best LLM playgrounds of 2024. From versatile platforms supporting a wide range of models to specialized tools with unique features, these playgrounds offer diverse options to suit different needs and preferences. Dive in to discover the top tools that can help you unlock new possibilities in the world of AI.",
      },
      {
        id: 2,
        primary_title: "Vercel AI ⭐️⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/vercel_playground.jpg",
          caption: "Vercel AI Playground",
          captionURL: "https://sdk.vercel.ai/",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 3,
        text: "Vercel AI offers an **[impressive playground](https://sdk.vercel.ai/)** for those looking to experiment with mainstream LLMs such as Llama-3, Claude-3.5, and GPT-4.0. One of its standout features is the ability to compare the performance of different models using the same prompt or test various prompts across multiple models simultaneously. This flexibility is particularly valuable for users who must test and evaluate multiple models in a single session.\n\n However, access to Anthropic and other flagship models is restricted to pro users, which requires a subscription of $20/month. While Vercel Playground supports image uploading, it lacks a view code panel, making it less friendly for users who wish to integrate models into their codebase. Additionally, it does not integrate with other popular LLMs, such as Cohere Command-R and the Qwen family, limiting its versatility for users who rely on these models.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/vercel_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        primary_title: "Keywords AI ⭐️⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/keywordsai.jpg",
          caption: "Keywords AI Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 5,
        text: "Keywords AI is a unified DevOps platform where developers can access over 200 LLMs and monitor their performance in production. [The Keywords AI LLM playground](https://keywordsai.co) allows users to choose any two of these models to compare their performance. Users can also customize settings such as temperature, Top P, and variants, enabling models to generate multiple responses based on a single prompt. \n\nThe platform provides a dedicated View Code feature for seamless integration in OpenAI, Anthropic, or Langchain formats. It also supports file and image uploading, making it versatile for various testing scenarios. \n\nDespite these strengths, the playground does not support comparing more than two models simultaneously, and users cannot add function calling within the playground.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/keywordsai_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        primary_title: "Fireworks AI ⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/fireworks.jpg",
          caption: "Fireworks AI Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 7,
        text: "Fireworks AI playground supports various open-source LLMs that they host. Users can test these models and easily integrate them into their projects by copying the integration code from the View Code panel. Additionally, users can customize settings such as temperature, stop words, and function calling, making it a versatile tool for fine-tuning model behavior.\n\n However, despite its usage-based pricing being affordable for common use cases, users must add a credit card to get started. The playground does not support image uploading, and users can only experiment with models hosted by Fireworks, meaning they can't try models from OpenAI, Anthropic, and Google. Furthermore, it only allows users to test a single model at a time, which is inconvenient when comparing models' performance.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/fireworks_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Together AI ⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/together.jpg",
          caption: "Together AI Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 9,
        text: "The Together AI playground is quite similar to Fireworks AI but offers more extensive support for open-source models. It includes additional settings such as System prompt and Safety Models, giving users more control over model behavior and safety parameters.\n\n Despite these advantages, it does not support models from providers like OpenAI and Anthropic. Additionally, users cannot compare multiple models simultaneously, limiting its functionality for side-by-side performance evaluation.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/together_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        primary_title: "LMSYS Chatbot Arena ⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/chat.jpg",
          caption: "LMSYS Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 11,
        text: "The LMSYS Chatbot Arena playground is completely free for public use and supports 51 mainstream LLMs. It allows users to compare the performance of two models simultaneously, making it a highly cost-effective option for testing models in simple use cases.\n\n However, this playground is limited in its capabilities and does not support system prompts, metric settings, or image uploading, which restricts its usability for more complex scenarios.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/chat_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
    ],
  },
  {
    id: 7,
    timestamp: "June 30, 2024",
    title: "All about LLM evaluating",
    slug: "all-about-llm-evaluating",
    subtitle:
      "Discover 3 Essential LLM Evaluation Metrics and the Innovative LLM-as-a-Judge Approach to Ensuring Quality Outputs",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog7/cover.png",
    },
    meta: {
      description: "",
    },
    paragraphs: [
      {
        id: 1,
        text: 'In today\'s tech-driven world, Large Language Models (LLMs) are increasingly vital. By 2025, an estimated 750 million apps will utilize LLMs, significantly boosting content generation and efficiency. \n\nAs the reliance on LLMs grows, so does the need to control and improve the quality of their outputs. One innovative approach to achieving this is using LLMs as evaluators, or "LLM-as-a-judge." \n\n In this blog, we’ll delve into 3 essential LLM evaluation metrics and introduce frameworks and platforms you can use to assess the performance of your LLMs effectively.',
      },
      {
        id: 2,
        primary_title: "3 Essential LLM evaluation metrics",
        text: "**Correctness** \n\n Correctness assesses how accurately the generated answer matches the ground truth, considering both semantic and factual similarities. Key metrics include ROUGE-L, Token Overlap, and BLEU, which collectively measure precision, recall, and F1 score.\n\n **Answer Relevancy** \n\n Answer relevancy evaluates the pertinence of the generated answer to the given prompt, with higher scores for more relevant responses. This metric considers the question, context, and answer to ensure the output is informative and concise.\n\n  **Hallucination** \n\n Hallucination determines if the LLM output contains made-up information, while faithfulness measures the factual consistency of the answer against the given context. An answer is deemed faithful if all its claims can be inferred from the context, with higher scores indicating better faithfulness.",
      },
      {
        id: 3,
        primary_title: "Conventional Evaluation Scores",
        text: " - **BLEU (Bilingual Evaluation Understudy):** The BLEU scorer evaluates the output of your LLM application against annotated ground truths (expected outputs). It calculates the precision for each matching n-gram (n consecutive words) between the generated and expected outputs, determining their geometric mean and applying a brevity penalty if needed. \n - **ROUGE (Recall-Oriented Understudy for Gisting Evaluation):** ROUGE evaluates text summaries by comparing n-gram overlaps between LLM outputs and expected outputs. Key variants include ROUGE-L, which measures the longest common subsequence (LCS) reflecting sentence-level word order; ROUGE-N, which assesses unigram, bigram, trigram, and higher-order n-gram overlap; and ROUGE-S, which evaluates skip-gram concurrence allowing for arbitrary gaps between words. These metrics provide a comprehensive evaluation of text similarity and relevance.\n - **BERTScore**: it leverages pre-trained contextual embeddings from BERT to match words in candidate and reference sentences by cosine similarity. Emerging as an alternative to traditional evaluation metrics, BERTScore is particularly useful for evaluating the quality of text summarization by measuring the similarity between the text summary and the original text. ",
      },
      {
        id: 4,
        primary_title: "LLM-as-a-judge",
        text: "Evaluating LLM outputs programmatically can be challenging due to a lack of good metrics, especially for generative tasks. LLM-as-a-Judge leverages LLMs to score outputs, offering an alternative to human labels when programmatic evaluation is difficult. This method is particularly useful for detecting hallucinations, assessing correctness, and identifying toxic or inappropriate answers. \n\n LLM-as-a-Judge uses LLMs to evaluate outputs based on criteria such as accuracy, toxicity, and hallucinations. The process involves creating evaluation prompts, selecting a suitable LLM, and generating evaluations across datasets. This approach provides consistent assessments, accelerates the iteration process, and enables quick refinements without manual annotation. ",
      },
      {
        id: 5,
        primary_title: "Evaluation frameworks",
        text: "- [Relari AI](https://www.relari.ai/): Relari AI (YC W24) develops testing and simulation tools for GenAI applications, including the continuous-eval framework and a cloud platform for synthetic data and auto-evaluators. Ragas: A framework that helps us evaluate our Retrieval Augmented Generation (RAG) pipeline \n- [Ragas](https://ragas.io): A framework that helps us evaluate our Retrieval Augmented Generation (RAG) pipeline",
      },
      {
        id: 6,
        primary_title: "LLM Evaluation platforms",
        text: "The frameworks above ensure high-quality LLM outputs, but it's also crucial to have observability and control over the evaluation process. [Keywords AI]{https://keywordsai.co} offers a comprehensive platform that integrates Relari AI, providing both an evaluation framework and observability. This platform allows you to choose from existing metrics or create your own to evaluate LLM outputs.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog7/evaluation_main.jpg",
          caption: "Keywords AI LLM evaluation",
          captionURL: "https://platform.keywordsai.co/platform/api/evaluations",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "You can select any model to evaluate your LLM output or use conventional evaluation methods.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog7/metric.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 8,
        text: "You can also monitor your LLM's performance through evaluation graphs displayed on the dashboard.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog7/graph.jpg",
          props: {
            variant: "sm",
          },
        },
      },
    ],
  },
  {
    id: 8,
    timestamp: "July 4, 2024",
    title: "Fine-Tuning LLMs with Custom Datasets",
    slug: "fine-tuning-llm-with-datasets",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog8/cover.png",
    },
    meta: {
      description: "",
    },
    paragraphs: [
      {id: 1,
        text: "Previously, we discussed [methods to prevent LLM hallucinations](https://keywordsai.co/#/blog/how-to-stop-llm-hallucinations), highlighting three main strategies: advanced prompting, retrieval-augmented generation (RAG), and fine-tuning. In this blog, we'll focus on fine-tuning large language models (LLMs) and guide you through creating a custom dataset for this purpose."
      },
      {
        id:2,
        primary_title: "What is LLM fine-tuning?",
        text: "Fine-tuning large language models (LLMs) involves training a pre-existing model, like GPT-3, on a smaller, specific dataset to make it better at specialized tasks. This process uses the model's existing knowledge, saving time and resources compared to training a model from scratch.\n\n By fine-tuning, we can adapt a general model to specific needs. For example, GPT-3 can be fine-tuned with medical reports to help it understand and generate accurate medical content. This makes the model more useful for particular applications, improving its performance in specialized areas while retaining its broad language skills."
      },
      {
        id: 3,
        primary_title: "When to fine-tune",
        text: "Fine-tuning is particularly useful in several situations:\n\n - **Specializing in a Specific Domain:** When you need the model to handle specialized content, like legal documents, medical reports, or technical jargon, fine-tuning helps the model become proficient in that area. \n- **Improving Task Performance:** Fine-tuning the model with relevant data improves performance and output quality if you're working on a specific task, such as generating creative writing or translating languages. \n- **Customizing Outputs:** Fine-tuning allows you to adjust the model’s tone, style, or level of detail to match your specific needs, such as creating a distinct voice for content or ensuring appropriate formality in communication. \n- **Adapting to Changing Data:** When the data distribution shifts over time, fine-tuning helps the model stay accurate and relevant, ensuring it performs well with new data. \n- **Enhancing Privacy and Fairness:** Fine-tuning can focus on improving privacy and security for applications that handle sensitive information. Additionally, it can help mitigate biases by using balanced datasets to train the model, promoting fairness. \n\n In essence, fine-tuning is beneficial when you must tailor a general model to meet specific requirements, enhance its task performance, customize its outputs, adapt to new data, or improve its handling of privacy and fairness issues."
      },
      {
        id:4,
        primary_title: "Steps of Fine-Tuning",
        text: "There are key steps for developers to fine-tune a Large Language Model (LLM):\n\n - **Select a Pre-Trained Model:** Previously, GPT-3 was the primary choice for fine-tuning due to its performance and limited alternatives. However, as of mid-2024, numerous models are available, each with its own strengths. Options now include Mistral-7B, Cohere Command-R, Meta LLaMA 2, and GPT-4. \n- **Prepare your custom dataset:** Gather a dataset relevant to your specific task or domain. Once you have the raw data, preprocess it by cleaning and organizing it. This includes splitting the dataset into training and testing sets to ensure the model can learn effectively and be appropriately evaluated. \n- **Fine-tuning:** Choose a fine-tuning platform to train your model or opt to train it in-house, depending on your resources and requirements. \n- **Validation:** Fine-tuning a model is an ongoing process. Continuously monitor its performance using accuracy, loss, and precision metrics. Adjust parameters as needed to optimize the model for your specific task, ensuring it meets your desired performance standards."
      },
      {
        id:4,
        primary_title: "Methods for fine-tuning LLMs",
        text: "Fine-tuning a Large Language Model (LLM) involves a supervised learning process where labeled examples adjust the model’s weights to enhance its proficiency in specific tasks. Here are some notable techniques used in fine-tuning: \n\n **Full Fine-Tuning (Instruction Fine-Tuning)** \n\n Instruction fine-tuning, or full fine-tuning, updates all the model's weights to improve its performance across various tasks. This technique involves training the model on examples that guide its responses to specific queries. The dataset used is tailored to the task at hand, such as summarization or translation. Full fine-tuning creates a new version of the model with enhanced capabilities, but it requires significant memory and computational resources, similar to pre-training, to store and process gradients, optimizers, and other components during training. \n\n **Parameter-Efficient Fine-Tuning (PEFT)** Parameter-efficient fine-tuning (PEFT) is more resource-efficient than full fine-tuning. It addresses the challenge of high memory and computational requirements by updating only a subset of the model's parameters and \"freezing\" the rest. This reduces the number of trainable parameters, making memory requirements more manageable and preventing catastrophic forgetting, where the model loses previously learned information. PEFT maintains the original LLM weights, ensuring the retention of general knowledge while fine-tuning for specific tasks. Techniques like Low-Rank Adaptation (LoRA) and Quantized LoRA (QLoRA) are popular and effective methods within PEFT, significantly reducing the number of trainable parameters and optimizing the fine-tuning process."
      },
      {
        id:5,
        primary_title: "How to have your own golden dataset?",
        text: "Having the right dataset is crucial for effective fine-tuning. However, selecting the most appropriate one can be challenging. Here are two methods to obtain a suitable dataset:"
      },
      {
        id:6,
        text: "**Pick an existing dataset** \n\n There are numerous existing datasets available for developers to use in fine-tuning models. You can choose one based on your specific use case. Here are some high-quality examples: \n\n - [Nectar](https://huggingface.co/datasets/berkeley-nest/Nectar) \n- [SlimOrca](https://huggingface.co/datasets/Open-Orca/SlimOrca) \n- [openhermes](https://huggingface.co/datasets/teknium/openhermes)"
      },
      {
        id:7,
        text: "**Customize a Dataset Based on Your Specific Needs** \n\n Sometimes, existing datasets won’t meet your specific requirements, or you may want to transition from using public models to a custom model for tasks like developing a specialized chatbot for your website or a unique coding assistant for your AI product. In such cases, you need to create a customized dataset using your own data. This involves collecting and labeling relevant data for your use case, ensuring it aligns perfectly with your tasks and objectives. "
      },
      {
        id:8,
        text: "**Example**\n\n  You can use [Keywords AI](https://keywordsai.co) to collect and analyze your LLM logs, tagging them for easy filtering. Once your request logs are recorded, you can edit them to create a dataset for fine-tuning models. \n\n For example, you can search for logs related to math and gather them into a new dataset. You can then edit and delete logs as needed to ensure your dataset is optimized for the best performance.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog8/dataset.jpg",
          caption: "Keywords AI",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "lg",
          },
        },
      }, 
    ]
  },
  {
    id: 9,
    timestamp: "July 10, 2024",
    title: "The 2024 LLM Directory: Find the Best Models for Your Use Cases",
    slug: "2024-llm-directory",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog9/cover.png",
    },
    meta: {
      description: "",
    },
    paragraphs: [
      {id: 1,
        text: "With the rapid advancements in artificial intelligence, new language models are emerging every week, each offering unique strengths and capabilities. Navigating this ever-evolving landscape can be challenging, especially when identifying the best large language model (LLM) for specific use cases.\n\nIn this blog, we will explore the top 5 LLMs for 5 different fields. After spending a weekend testing over 100 LLMs and considering our users' preferences and use cases, along with data from Huggingface, we have compiled a comprehensive guide to help you choose the right LLM for your needs."
      },
      {
        id:2,
        primary_title: "Coding",
        text: "- **Claude 3.5 Sonnet:** Anthropic’s latest flagship model, leading [the LMSYS Arena Leaderboard’s Coding category](https://chat.lmsys.org/). It surpasses every existing LLMs, becoming our team's primary coding assistant, replacing GPT-4o. \n- **GPT-4-Turbo-2024-04-09:** OpenAI's top choice for coding, solving most problems efficiently. Its drawback is the pricing, which is double that of GPT-4o.\n- **GPT-4o-2024-05-13:** OpenAI's flagship model, though slightly less proficient in coding than GPT-4-Turbo. It solves most daily coding issues but tends to repeat code. However, its speed makes it ideal for AI coding assistants. \n- **Gemini 1.5 Pro:** Google's latest, highly capable model for coding. Comparable to GPT-4o in performance, its limited public availability restricts high-volume usage. \n- **Claude 3 Opus:** Anthropic’s previous flagship model is on par with GPT-4-Turbo in performance but is currently too expensive to recommend. ($15 / 1M input tokens, $75 / 1M output tokens)"
      },
      {
        id: 3,
        primary_title: "Content Creation",
        text: "- **Claude 3.5 Sonnet:** Anthropic’s premier model excels in generating high-quality content. It was one of the top performers in script writing, demonstrating strong capabilities in producing detailed and coherent drafts. **Best for: script writing, storytelling, and creative content.** \n- **Llama 3 70b Instruct:** Meta’s open-source LLM, Llama-3–70b, is currently the best open-source LLM available. It is known for its thorough outlines, ability to learn from reference texts, and high-quality text generation. Llama-3–70b’s nuanced responses and attention to detail make it stand out among competitors. **Best for: blog writing, detailed articles, and technical documentation.** \n- **GPT-4o-2024-05-13:** OpenAI's most powerful LLM for content creation. It generates high-quality content and understands prompts clearly. It shines particularly when integrated with ChatGPT, allowing users to utilize a wide range of tools for enhanced functionality. **Best for: versatile content creation and email writing.** \n- **Gemini 1.5 Pro:** A top contender from Google, Gemini 1.5 Pro performed exceptionally well in script writing, matching the capabilities of Llama-3–70b and Claude-3-Sonnet. Its nuanced responses and attention to detail make it a strong choice for content creation tasks. **Best for: comprehensive reports, story development, and academic writing.** \n- **Mistral Large:** Another strong performer in the content creation field, Mistral Large offers robust capabilities in generating quality content. Though not as widely recognized as some competitors, it produces coherent, detailed text. **Best for: general content creation, marketing copy, and social media posts.**"
      },
      {
        id:4,
        primary_title: "Translation",
        text: "- **Claude 3.5 Sonnet:** This model is widely used by many AI language translators due to its excellent performance across most languages and cost-effectiveness. **Best for: Spanish, German, and general multilingual translations.** \n- **GPT-4o-2024-05-13:** OpenAI's powerful model supports multiple languages and excels particularly in translating Chinese, French, German, and Spanish. **Best for: Chinese, French, German, and Spanish translations, especially where speed and accuracy are crucial.** \n- **Gemini Pro:** Known for its strong performance in French translations, Gemini Pro is also a reliable choice for other languages. **Best for: French translations and versatile multilingual tasks.** \n- **Llama 3 70b Instruct:** Meta’s open-source LLM supports multiple languages, with notable proficiency in Spanish. **Best for: Spanish translations and open-source multilingual projects.** \n- **Gemini 1.5 Pro:** This model excels in translating Chinese, French, and German, making it a top choice for these languages. **Best for: Chinese, French, and German translations, particularly in professional and technical contexts.**"
      },
      {
        id:4,
        primary_title: "Long Text Summarization",
        text: "- **Claude 3.5 Sonnet:** With a large context window of 200K, this model matches the performance of Opus but at a quarter of the cost. Its max output token limit is 4096 tokens. **Best for: summarizing extensive documents and articles where cost-effectiveness is important.** \n- **GPT-4o-2024-05-13:** Featuring a 100K context window, GPT-4o is exceptionally fast and consistently accurate, rarely hallucinating. **Best for: reliable and speedy summarization of lengthy texts with minimal errors.** \n- **Command R+:** The top choice for local deployment, Command R+ excels at structuring and organizing summaries. It effectively splits layers of abstraction and formats topics coherently. **Best for: local summarization tasks requiring detailed and well-structured outputs.** \n- **Gemini 1.5 Pro:** With a 100K context length and incredible speed, Gemini 1.5 Pro can summarize thousands of pages within a minute. **Best for: rapid summarization of very large documents, such as multi-thousand-page PDFs.** \n- **Gemini 1.5 Flash:** Google’s cost-effective and extremely fast model, though not as reliable as Gemini 1.5 Pro. **Best for: quick summarization tasks where cost and speed are prioritized over reliability.**"
      },
      {
        id:5,
        primary_title: "Document Processing",
        text: "- **Claude 3.5 Sonnet:** This model excels in extracting detailed information from complex documents, handling intricate data with impressive precision. Its performance in processing financial data and other detailed documents stands out. **Best for: detailed financial data extraction, complex document analysis, and precise information retrieval.** \n- **GPT-4o-2024-05-13:** GPT-4o is a robust model for document processing, offering a wide range of capabilities. It effectively summarizes reports and extracts key information, although it may occasionally miss some details in more intricate tasks. **Best for: general document processing, summarizing reports, and extracting key information from standard documents.** \n- **Claude 3 Haiku:** Priced attractively, Haiku offers the best value among visual language models. It provides low-cost outputs with commendable performance, particularly suitable for tasks requiring visual language processing. **Best for: cost-effective document analysis, visual data processing, and tasks requiring multimodal capabilities.** \n- **Qwen-VL:** As a leading open-source model, Qwen-VL excels in extracting text from images and providing insightful responses. It supports high-definition images and various aspect ratios, making it highly versatile. **Best for: image-based text extraction, detailed image analysis, and open-source projects needing robust multimodal processing.** \n- **Gemini 1.5 Flash: While cost-effective and extremely fast, Gemini 1.5 Flash may have some accuracy trade-offs. Best for: rapid document processing tasks where speed and cost are prioritized over absolute precision.**"
      },
      {
        id:6,
        primary_title: "How to Try Out These Models",
        text: "You can easily explore and test all of these models on Keywords AI’s LLM Playground. This platform allows you to experiment with different language models and seamlessly integrate them into your AI applications, enhancing your projects with the best-suited LLM for your needs."
      },
    ]
  },
  {
    id: 10,
    timestamp: "July 15, 2024",
    title: "How to increase your LLM rate limits for free",
    slug: "increase-llm-rate-limits",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog10/cover.png",
    },
    meta: {
      description: "",
    },
    paragraphs: [
      {id: 1,
        text: "As large language model (LLM) products continue proliferating, managing their rate limits becomes increasingly critical for developers. Rate limits for LLMs define the number of requests a user or client can make to the model within a specified timeframe. With the growing demand for these powerful tools, developers face the challenge of ensuring their applications can handle high traffic without running into rate limit constraints. Addressing this issue is essential to prevent customer-facing errors and maintain a seamless user experience. Understanding and enhancing your LLM rate limit is key to optimizing performance and reliability. \n\nIn this blog, we’ll delve into how you can enhance your LLM rate limit and avoid LLM downtime, ensuring optimal performance and reliability for your applications."
      },
      {
        id:2,
        primary_title: "Rate Limits of Leading LLM Providers",
        text: "**OpenAI**\n\n OpenAI offers 6 tiers for users, ranging from a free tier to tier 5, each with varying rate limits based on your spending. For instance, if your monthly expenditure is between $500 and $1,000, the rate limit for flagship models like gpt-4o will be 5,000 requests per minute (5,000 RPM).",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/openai.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        text: "**Anthropic**\n\n Anthropic’s rate limits are similar to OpenAI's, with 1 free tier and 4 paid tiers (tiers 1 to 4). At a monthly spending of over $1,000, users can achieve a maximum rate limit of 4,000 RPM and a maximum usage cap of $5,000 per month.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/anthropic.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id:4,
        text: "**Gemini**\n\n Despite Gemini’s impressive performance for AI products, its rate limits are relatively low. The top model, Gemini 1.5 Pro, supports only 360 requests per minute (RPM), but its tokens per minute (TPM) is significantly higher than those of OpenAI and Anthropic.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/google.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id:5,
        primary_title: "Strategies to Enhance LLM Rate Limits Without Additional Costs",
        text: "**Load balancing between models**\n\n Load balancing between models involves distributing your LLM requests across multiple models proportionally. By utilizing different LLMs with similar performance levels, you can effectively manage and optimize your rate limits. This approach ensures that no single model is overwhelmed, thereby reducing the likelihood of hitting rate limits and maintaining smooth operations. \n\nFor instance, Keywords AI’s load balancing feature allows you to easily control your LLM rate limits by distributing requests among various models. You can use models like Anthropic Haiku, Gemini 1.5 Flash, and GPT-3.5-turbo simultaneously, specifying their weights to balance the load efficiently. \n\nIn the example below, 50% of your requests are directed to Claude 3 Haiku, while 25% go to GPT-3.5-turbo and Gemini 1.5 Flash each:\n\n ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/code.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id:6,
        primary_title: "Load balancing between API keys",
        text: "Sometimes, you may prefer not to distribute your API requests across different models and instead want a single LLM to handle all your requests. In such cases, load balancing between API keys from a single provider is the best solution.\n\n To achieve this, you need to create multiple accounts with a single provider and generate API keys for each account. Then, navigate to the Keywords AI Credential page to add your credentials and specify weights for each deployment.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/lb1.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id:7,
        text: "You can also add load balancing for any other providers you use on the platform, ensuring optimal management of your rate limits across various credentials. ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/lb3.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id:8,
        primary_title: "Additional Strategies to Enhance Your LLM Rate Limits",
        text: "Besides the two primary methods, there are several other ways to enhance your LLM rate limits: \n- **Request Higher Rate Limits from Providers:** If you have a substantial spending history with a provider, you can request them to manually increase your rate limits. This option is viable but typically requires significant expenditure for approval. \n- **Use OpenAI’s Batch API:** For use cases that do not require synchronous processing, OpenAI’s asynchronous Batch API is an excellent option. It offers higher rate limits and is more cost-effective than synchronous processing. However, responses can take up to 24 hours, making it unsuitable for real-time applications. \n- **Build Your Own Load Balancing Solution:** If data privacy is a concern, building your own load balancing solution might be the best route. While this approach ensures full control over your data, it requires significant effort and technical expertise. Leveraging third-party packages can help streamline this process, but it will still demand considerable time and resources.",
      },
    ]
  },
];