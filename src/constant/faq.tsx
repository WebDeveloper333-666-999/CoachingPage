import React from 'react';

// Define the type for a single FAQ item
interface FAQItem {
  title: string;
  content: React.ReactNode;
}

// Define the array of FAQ items
const faqItems: FAQItem[] = [
  {
    title: "Spiritual Coaching",
    content: (
      <>
        <h3 className="text-gray-700 font-medium mb-4">What is the difference between coaching and spiritual coaching?</h3>
        <p className="mb-6">
          My coaching is not conventional because I connect with your system before the coaching and
          thereby receive input for you. In addition, we will not only work on a mental level, but always
          include your soul. This way you will reach your goal faster and with heart. All 5 levels of
          consciousness are incorporated.
        </p>
        <h3 className="text-gray-700 font-medium mb-4">How many sessions do I need?</h3>
        <p>
          This is very individual, but experience has shown that if we also work energetically and with
          quantum physics, you can make very quick progress and change your system sustainably.
        </p>
      </>
    )
  },
  {
    title: "Energetic Healing Humans and Animals",
    content: (
      <>
        <h3 className="text-gray-700 font-medium mb-4">
          Works equally for humans and animals<br/>
          How can you heal with your hands?
        </h3>
        <p className="mb-6">
          I connect with my spirit guides and they support me, we always work for your best interests.
        </p>

        <h3 className="text-gray-700 font-medium mb-4">
           How do you know what my body needs?
        </h3>
        <p>
          With my media skills, I can scan your body on an energetic level and see where you need support. 
          Sometimes my intuition tells me.
        </p>

        <h3 className="text-gray-700 font-medium mb-4">
           Can something bad happen?
        </h3>
        <p>
          Nothing negative can happen during the treatment. I have prepared myself and the room (whether energetically for remote treatments or physically) and protected everything.
          Sometimes there can be an initial worsening after the treatment, but this quickly settles down again.
        </p>
      </>
    )
  },
  {
    title: "Animal Communication",
    content: (
      <>
        <h3 className="text-gray-700 font-medium mb-4">
          How does animal communication work?
        </h3>
        <p className="mb-6">
          Before I connect with your beloved animal, I make various preparations to ensure that everything is positive and everything can happen for the best. Then I make spiritual contact and ask your beloved animal your questions.
        </p>

        <h3 className="text-gray-700 font-medium mb-4">
          Can it sometimes not speak?
        </h3>
        <p>
          Yes, that can happen, but I have only experienced it once. What is true is that everything is always done for the benefit of you and your animal, which is why I always accept it when an animal does not want to speak. There is a reason for everything. In this case, you will also get your money back, because I only accept money for a service.
        </p>

        <h3 className="text-gray-700 font-medium mb-4">
          Can it sometimes not answer my questions?
        </h3>
        <p>
         Yes, your animal has its own needs. I have to recognize and accept these. 
        </p>

        <h3 className="text-gray-700 font-medium mb-4">
          How do animals react when you talk to them?
        </h3>
        <p>
          It really varies a lot. Some people jump at the chance, with others I have to prepare them slowly for the TK based on what they've experienced. Some sit on my lap, others look away but speak. But 99% are happy and 100% so far always say that I can come back. 
        </p>
      </>
    )
  },
  {
    title: "Quantum Healing",
    content: (
      <>
        <h3 className="text-gray-700 font-medium mb-4">
           How does quantum healing work?
        </h3>
        <p className="mb-6">
          The body is encoded by codes. When we experience things in life, the cell stores this as a code. That is why we act unconsciously and feel things that are not clear to us. With quantum healing we re-encode the code. You don't have to tell me anything about that, the body speaks volumes.
        </p>

        <h3 className="text-gray-700 font-medium mb-4">
          Do you feel any physical pain?
        </h3>
        <p>
          No, it is absolutely painless.
        </p>
      </>
    )
  }
];

// Export the faqItems array
export default faqItems;