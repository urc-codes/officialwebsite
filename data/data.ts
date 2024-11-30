export interface EventData {
  id: number;
  title: string;
  imageSrc: string;
  eventDate: string;
  eventTime: string;
  location: string;
}

export const eventData: EventData[] = [
  // {
  //   id: 1,
  //   title: "Robotics Workshop",
  //   imageSrc: "/path/to/image.jpg",
  //   eventDate: "June 15, 2024",
  //   eventTime: "2:00 PM",
  //   location: "UENR Campus"
  // },
];
export const leaders = [
  {
    id: 1,
    name: "Philemon Obed Obeng",
    position: "President",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/scot.jpg",
  },
  {
    id: 2,
    name: "Mensah Emmanuel Osei ",
    position: "Vice President",
    department: "Electrical & Electronic Engineering",
    level: "L300",
    image: "/profiles/emma.jpg",
  },
  {
    id: 3,
    name: "Alexander Opoku Dwumaah ",
    position: " GeneralSecretary",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/alex.jpg",
  },
  {
    id: 4,
    name: "Baah Kenneth ",
    position: "Project Manager",
    department: "Electrical & Electronic Engineering",
    level: "L300",
    image: "/profiles/ken.jpg",
  },
  {
    id: 5,
    name: " Fatima Zakaria ",
    position: "Financial Secretary",
    department: "Electrical & Electronic Engineering",
    level: "L400",
    image: "/profiles/sec.jpg",
  },
  {
    id: 6,
    name: "Joel Senyo",
    position: "Public Relations Officer (P.R.O)",
    department: "Computer Engineering",
    level: "L300",
    image: "/profiles/joe.jpg",
  },
];
interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Exploring the Future with Robotics: Join the Journey!",
    excerpt:
      "Discover how the UENR Robotics Club is pushing the boundaries of innovation, bringing students together to create, learn, and build a brighter future through robotics.",
    content:
      "<p>Welcome to the official blog of the UENR Robotics Club! We’re excited to share insights, updates, and breakthroughs with you as we journey through the fascinating world of robotics. At the UENR Robotics Club, our mission is to empower students to explore, innovate, and develop their skills through hands-on projects and real-world applications of robotics.</p><p>As technology advances at a rapid pace, the importance of robotics in shaping our future cannot be overstated. From automating complex tasks to creating smarter machines that assist in healthcare, environmental conservation, and even space exploration, robotics is at the heart of modern innovation. Our club is dedicated to equipping our members with the knowledge, skills, and experience they need to contribute to these groundbreaking fields.</p><p>Throughout the academic year, the UENR Robotics Club organizes workshops, hackathons, and guest lectures with industry experts, offering members a chance to learn from some of the best minds in the field. Additionally, our hands-on projects allow students to work on real-world challenges, encouraging teamwork, critical thinking, and problem-solving skills that are invaluable in today’s tech-driven world.</p><p>Whether you're a seasoned robotics enthusiast or just starting out, there's a place for you in our community. Join us as we explore the limitless potential of robotics and create a future where technology serves humanity in meaningful ways.</p><p>Stay tuned for regular updates, success stories, and upcoming events here on our blog. We’re just getting started, and we’re thrilled to have you along for the ride!</p>",
    date: "2024-01-01",
    image: "/blog1.jpg",
  },
];

export const getPosts = async (): Promise<Post[]> => {
  return posts;
};

export const getPostById = async (id: string): Promise<Post | undefined> => {
  return posts.find((post) => post.id === id);
};

export const projectsData = [
  {
    id: 1,
    title: "Project Curiosity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "3rd October 2021 - 14th December 2023",
    imageUrl: "/event.png",
  },
  {
    id: 2,
    title: "Project Exploration",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    duration: "1st January 2023 - Present",
    imageUrl: "/event.png",
  },
];

export const galleryData = [
  {
    title: "TECH FEST 2.0",
    images: [
      "/tech1.jpg",
      "/tech2.jpg",
      "/tech3.jpg",
      "/tech4.jpg",
      "/tech5.jpg",
      "/tech6.jpg",
    ],
  },
  {
    title: "STEM FESTIVAL 2021",
    images: ["/stem1.webp", "/stem2.webp", "/stem3.webp", "/stem4.webp"],
  },
  {
    title:
      "GLOBAL MONITORING FOR ENVIRONMENT & SECURITY INCUBATION CHALLENGE 2021",
    images: [
      "/global1.webp",
      "/global2.webp",
      "/global3.webp",
      "/global4.webp",
    ],
  },
  {
    title: "NATIONAL ENERGY QUIZ & INNOVATION CHALLENGE",
    images: [
      "/National2.webp",
      "/National1.webp",
      "/National3.webp",
      "/National4.webp",
    ],
  },
];
