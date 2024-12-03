// questions.js

const questions = [
  {
    question_text: "What is a key principle of the AGILE methodology?",
    question_type: "multiple_choice",
    options: [
      "a)Deliver working software only at the end of the project",
      "b)Respond to change over following a fixed plan",
      "c)Prioritize detailed documentation over collaboration",
      "d)Follow a strict hierarchial structure",
    ],
    correct_option: 1,
    correct_explanation:
      "AGILE prioritizes flexibility and the ability to respond to change, valuing collaboration, customer feedback, and iterative development over rigid planning.",
  },
  {
    question_text:
      "Which phase of Disney's ideation process focuses on identifying potential flaws and obstacles?",
    question_type: "multiple_choice",
    options: ["a)Dreamer", "b)Realist", "c)Critic", "d)Innovator"],
    correct_option: 2,
    correct_explanation:
      "The 'critic' phase evaluates ideas for potential weaknesses or issues, complementing the 'dreamer' and 'realist' phases by ensuring feasibility and robbustness.",
  },
  {
    question_text:
      "What is the primary purpose of creating a Minimum Viable Product (MVP)?",
    question_type: "multiple_choice",
    options: [
      "a)To launch a full-featured product immediatley.",
      "b)To validate the product idea with minimal effort and cost.",
      "c)To ensure all features are included before user feedback.",
      "d)To avoid iterative development.",
    ],
    correct_option: 1,
    correct_explanation:
      "An MVP allows a team to test core functionalities and gather feedback early, minimizing development costs and maximizing learning.",
  },
  {
    question_text:
      "What is the first step in creating a pull request on GitHub?",
    question_type: "multiple_choice",
    options: [
      "a)Merge the branch into the main repository.",
      "b)Create a new issue.",
      "c)Fork or clone the repository.",
      "d)Delete the forked repository.",
    ],
    correct_option: 1,
    correct_explanation:
      "To contribute to a repository, you first need to fork or clone it, allowing you to make changes locally or on your own copy before submitting a pull request.",
  },
  {
    question_text: "What does neuroplasticity refer to?",
    question_type: "multiple_choice",
    options: [
      "a)The brain's ability to form new connections and adapt.",
      "b)The fixed nature of brain cells after development.",
      "c)The capacity to increase intelligence through genetics.",
      "d)The replacement of neurons by muscles.",
    ],
    correct_option: 0,
    correct_explanation:
      "Neuroplasticity describes the brain's capacity to reorganize itself by forming new neural connections, enabling learning, adaptation, and recovery from injury.",
  },
  {
    question_text:
      "In a neural network, what is the role of a synapse or 'link'?",
    question_type: "multiple_choice",
    options: [
      "a)Store the output data.",
      "b)Connect nodes and transmit signals between them.",
      "c)Act as a final decision layer.",
      "d)Serve as the source of all input data.",
    ],
    correct_option: 1,
    correct_explanation:
      "Neural links (synapses) transmit signals between neurons (nodes), influencing how information flows through the network.",
  },
  {
    question_text:
      "Which of the following best decribes 'decomposition' in computational thinking?",
    question_type: "multiple_choice",
    options: [
      "a)Breaking down a problem into smaller, manageable parts.",
      "b)Creating complex algorithms in one step.",
      "c)Ignoring irrelevant data.",
      "d)Focusing on hardware implementation.",
    ],
    correct_option: 0,
    correct_explanation:
      "Decomposition involves breaking a complex problem into smaller, easier-to-solve components, a foundational practice in computational thinking.",
  },
  {
    question_text:
      "What are the two main components of a Generative Adversarial Network (GAN)?",
    question_type: "multiple_choice",
    options: [
      "a)Generator and Critic.",
      "b)Generator and Discriminator.",
      "c)Encoder and Decoder.",
      "d)Trainer and Observer.",
    ],
    correct_option: 1,
    correct_explanation:
      "GANs consist of a Generator, which creates data, and a Discriminator, which evaluates data to distinguish between real and generated samples.",
  },
  {
    question_text:
      "In pair programming, what is the primary role of the 'Driver'?",
    question_type: "multiple_choice",
    options: [
      "a)To review code written by the Navigator.",
      "b)To write the code while the Navigator guides.",
      "c)To take notes on the session.",
      "d)To decide the overall project direction.",
    ],
    correct_option: 1,
    correct_explanation:
      "The Driver writes the code while the Navigator reviews and guides the Driver's work, ensuring quality and collaborative problem-solving.",
  },
  {
    question_text:
      "Which habit is commonly part of a high-performance routine?",
    question_type: "multiple_choice",
    options: [
      "a)Multitasking on many projects at once.",
      "b)Regular reflection and time-blocking for deep work.",
      "c)Avoiding breaks to maximize productivity.",
      "d)Ignoring feedback to maintain focus.",
    ],
    correct_option: 1,
    correct_explanation:
      "High-performance routines often include practices like time-blocking for focused work and reflecting on progress to optimize productivity and well-being.",
  },
];

// Don't worry about this, we're just exporting the questions
module.exports = questions;

// Format of what a question object should look like

/* let questionOne = {
  text: "xyz",
  type: "xyz",
  options: ["A", "B", "C", "D"],
  correct_option: options[0],
  correct_explanaion: "test",
}; */

/* PLAN:
1. Come up with 10 multiple choice questions, and the answers to them about Week 1. Start with just one question. 
2. Create the first question into an object with the following properties:
    question_text: This is a string that contains the text of the question you want to ask.
    question_type: This should always be the string "multiple_choice" for this task.
    options: This is an array of strings, where each string is a possible answer to the question. You should provide four options.
    correct_option: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on.
    correct_explanation: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer.
3. Add this to the questions array and test. If working, move to step 4.
4. Repeat for all 10 questions.
*/
