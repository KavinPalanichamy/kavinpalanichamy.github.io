// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of some of my works.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-the-perception-problem",
        
          title: "The Perception Problem",
        
        description: "How can we enable computers to see the 3D world?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/The_Reconstruction_Problem/";
          
        },
      },{id: "post-the-optimization-problem",
        
          title: "The Optimization Problem",
        
        description: "Workhorse of engineering.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/The_Optimization_Problem/";
          
        },
      },{id: "books-1984",
          title: '1984',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1984/";
            },},{id: "books-angels-and-demons",
          title: 'Angels and Demons',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/angels_demons/";
            },},{id: "books-chip-war",
          title: 'Chip War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/chip_war/";
            },},{id: "books-the-davinci-code",
          title: 'The Davinci Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/da_vinci/";
            },},{id: "books-leonardo-da-vinci",
          title: 'Leonardo da Vinci',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/da_vinci_bio/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/elon/";
            },},{id: "books-guns-germs-and-steel",
          title: 'Guns, germs, and steel',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/guns/";
            },},{id: "books-hitchhiker",
          title: 'Hitchhiker',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hitchhiker/";
            },},{id: "books-the-idea-factory",
          title: 'The Idea Factory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/idea_factory/";
            },},{id: "books-incognito",
          title: 'Incognito',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/incognito/";
            },},{id: "books-the-lost-symbol",
          title: 'The Lost Symbol',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/lost_symbol/";
            },},{id: "books-on-the-origin-of-species",
          title: 'On the origin of species',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/origin/";
            },},{id: "books-the-scientist-in-the-crib",
          title: 'The scientist in the crib',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/scientist_cirb/";
            },},{id: "books-the-brain",
          title: 'The Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_brain/";
            },},{id: "books-the-wages-of-destruction",
          title: 'The Wages of Destruction',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/wages_of_destruction%20copy/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-indoor-positioning-for-mobile-robots",
          title: 'Indoor Positioning for Mobile Robots',
          description: "Thanks to UWB technology, robots can now navigate indoors with centimeter-level precision. The project was carried out at PIAP Lukasiewicz, a leading Polish government defence research institute.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_projects/";
            },},{id: "projects-plc-software-with-hmi-for-cnc-engraver",
          title: 'PLC software with HMI for CNC Engraver',
          description: "The team project was done as a part of my internship at B&amp;R Automation. Automation studio was used to program a PLC from B&amp;R. The PLC was used to control a 4 axis CNC machine.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_projects/";
            },},{id: "projects-personal-website-portfolio",
          title: 'Personal Website / Portfolio',
          description: "You are looking at it right now! This is a customized version of the popular al-folio academic template. Hosted on GitHub and built with Jekyll.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_projects/";
            },},{id: "projects-esa-hackathon",
          title: 'ESA Hackathon',
          description: "A proposal to determine signal propagation in varied terrains using satellite data. The idea was developed as part of a hackathon event organized by European space Agency.The proposal won the preliminary round and was runner-up in the finals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_projects/";
            },},{id: "projects-fabric-gripper",
          title: 'Fabric Gripper',
          description: "A project focused on prototyping a pneumatic gripper capable of grasping and lifting delicate, soft cloths.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_projects/";
            },},{id: "projects-t3s-textile-sorting-spreading-and-seperation",
          title: 'T3S - Textile Sorting, Spreading and Seperation',
          description: "T3S is an innovative solution for automated textile handling developed by Desion GmbH, integrating advanced AI for real-time defect detection, enhancing quality control and efficienct automated sorting in textile processing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_projects/";
            },},{id: "projects-ball-on-plate-balancing-system",
          title: 'Ball-on-Plate Balancing System',
          description: "Development, implementation and Simulink simulation of a ball-on-plate balancing system using a 3RRS parallel manipulator and PID control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_projects/";
            },},{id: "projects-segmentation-and-semantic-classification-with-pretrained-models",
          title: 'Segmentation and Semantic Classification with Pretrained Models',
          description: "An advanced computer vision system combining Meta&#39;s SAM (Segment Anything Model) and OpenAI&#39;s CLIP for intelligent object detection, segmentation, and natural language-based identification in images.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_projects/";
            },},{id: "projects-safepath-smart-navigation-glasses",
          title: 'SafePath - Smart Navigation Glasses',
          description: "An innovative assistive technology solution combining computer vision, haptic feedback, and AI-powered voice descriptions to provide accessible and affordable navigation assistance for the visually impaired.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_projects/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%6C%61%6E%69%63%68%61%6D%79.%6B%61%76%69%6E@%74%75%6D.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kavinpalanichamy", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
