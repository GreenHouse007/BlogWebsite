const Post = require("../models/Post");

async function insertPostData() {
  try {
    // Remove all existing posts
    await Post.deleteMany({});

    // Insert the new posts
    await Post.insertMany([
      {
        title:
          "The Roots of Code: Why Fundamentals Matter More Than Frameworks",
        body: "Every software developer, whether seasoned or new, eventually learns the same lesson: frameworks and libraries change, but fundamentals stay the same. Core concepts like data structures, algorithms, and problem-solving strategies are the deep roots of the craft. Just like a tree with strong roots can weather any storm, a developer with strong fundamentals can adapt to new tools quickly. Without this grounding, developers risk becoming tool-dependent instead of problem-solvers. Investing time in sharpening these essentials ensures that you’re not just coding—you’re creating adaptable solutions that stand the test of time.",
      },
      {
        title: "Debugging as Gardening: Cultivating Cleaner Code",
        body: "Debugging often gets a bad reputation as tedious work, but it can be reframed as tending a garden. A gardener doesn’t just cut weeds; they nurture plants, arrange spaces, and anticipate growth. Likewise, debugging is about understanding how code behaves, removing unnecessary clutter, and building a healthier environment for future features. The real value of debugging lies in teaching developers to anticipate problems, write more maintainable code, and develop a sense of craftsmanship. Instead of dreading bugs, treat them as signs that your codebase is alive—and ready to be cultivated.",
      },
      {
        title:
          "From Branches to Merges: What Git Teaches Us About Collaboration",
        body: "Git is more than just a version control tool; it’s a philosophy of teamwork. Branching lets each developer experiment safely, while merging brings ideas together into one shared vision. Conflicts, much like in human teams, are inevitable—but they’re also opportunities for dialogue and improvement. By embracing Git’s branching model, teams learn how to innovate independently without sacrificing unity. The bigger lesson here is that great software is rarely the product of one person’s brilliance, but rather the result of thoughtful collaboration and compromise.",
      },
      {
        title: "Why Cloud Computing Is the Forest Beyond the Tree",
        body: "When we think about software development, it’s tempting to focus on the “tree” of one application. But cloud computing expands the view into a vast forest. Today’s software rarely stands alone—it connects to APIs, scales across servers, and interacts with global networks. Developers who understand this broader ecosystem are better prepared to design resilient, scalable applications. Building for the cloud isn’t just a technical skill; it’s a mindset that shifts the developer’s perspective from isolated projects to interconnected systems that power modern life.",
      },
      {
        title:
          "The Hidden Art of Refactoring: Sculpting Code Into Masterpieces",
        body: "Refactoring is often undervalued because it doesn’t deliver shiny new features. But in reality, it’s the sculptor’s chisel that transforms raw marble into art. Clean, elegant code is easier to maintain, understand, and extend. The discipline of refactoring teaches humility—acknowledging that your first draft may not be the best draft. It also emphasizes continuous improvement, a core philosophy in agile development. Great developers don’t just write code; they refine it into a masterpiece that future teams can admire and build upon.",
      },
      {
        title: "Software Development as Storytelling: Every Line Tells a Tale",
        body: "At its heart, software development is a form of storytelling. Every function explains a piece of logic, every variable name gives a clue, and every comment serves as narration. When code is poorly written, the story is confusing, making it hard for the next developer to follow the plot. Good developers think about their audience—the future teammate, the maintainer, or even their own forgetful self months later. Writing readable, expressive code is about crafting a story that others can understand and continue, making software not just functional, but communicative.",
      },
      {
        title: "Automated Testing: The Safety Net Every Developer Needs",
        body: "In software development, bugs are inevitable, but costly mistakes don’t have to be. Automated testing acts as a safety net, catching issues before they slip into production. Unit tests verify small components, integration tests ensure systems work together, and end-to-end tests simulate real-world use. While writing tests may feel like extra work, they save countless hours of debugging down the line and give developers confidence to refactor or ship features quickly. Testing isn’t just about finding bugs—it’s about building trust in the software you create.",
      },
      {
        title: "The Human Side of Code Reviews",
        body: "Code reviews are often treated as a technical process, but at their heart, they’re about communication and collaboration. A good review is more than pointing out errors; it’s a chance to mentor, learn, and share knowledge across a team. Tone matters just as much as correctness. Constructive feedback builds trust and encourages growth, while harsh criticism can discourage developers from contributing. By viewing code reviews as conversations rather than checklists, teams foster a culture of continuous learning and shared ownership of the codebase.",
      },
    ]);

    console.log("Database replaced with new posts!");
  } catch (err) {
    console.error(err);
  }
}

insertPostData();
