export interface ArchiveItem {
  id: string;
  client: string;
  category: string;
  thumbnail: string;
  description: string;
  year: string;
  platforms: string[];
}

export const archiveData: ArchiveItem[] = [
  {
    id: "archive-1",
    client: "Content Creator A",
    category: "Short-Form Content",
    thumbnail: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzU5MjM5NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Viral short-form content strategy delivering consistent engagement across TikTok and Instagram Reels.",
    year: "2024",
    platforms: ["TikTok", "Instagram", "YouTube Shorts"],
  },
  {
    id: "archive-2",
    client: "Lifestyle Brand",
    category: "Brand Content",
    thumbnail: "https://images.unsplash.com/photo-1601735584002-14784ded7865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBicmFuZHxlbnwxfHx8fDE3NTkzMDYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Comprehensive social media content creation and brand storytelling for lifestyle e-commerce brand.",
    year: "2024",
    platforms: ["Instagram", "Facebook"],
  },
  {
    id: "archive-3",
    client: "Fitness Influencer",
    category: "Personal Brand",
    thumbnail: "https://images.unsplash.com/photo-1618688862225-ac941a9da58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dHxlbnwxfHx8fDE3NTkyMjk5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Workout video editing and motivational content creation for growing fitness community.",
    year: "2023",
    platforms: ["YouTube", "Instagram"],
  },
  {
    id: "archive-4",
    client: "Tech Startup",
    category: "Product Launch",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwxfHx8fDE3NTkzMDYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Product announcement videos and explainer content for SaaS platform launch campaign.",
    year: "2024",
    platforms: ["LinkedIn", "YouTube"],
  },
  {
    id: "archive-5",
    client: "Food & Beverage",
    category: "Commercial Content",
    thumbnail: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU5MjMzNzA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Recipe videos and restaurant promotional content with appetizing visual storytelling.",
    year: "2023",
    platforms: ["Instagram", "TikTok"],
  },
  {
    id: "archive-6",
    client: "Music Artist",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpb3xlbnwxfHx8fDE3NTkzMDAyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Music video editing and visual effects for independent artist album release.",
    year: "2023",
    platforms: ["YouTube", "Instagram"],
  },
  {
    id: "archive-7",
    client: "Real Estate Agency",
    category: "Property Showcase",
    thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eXxlbnwxfHx8fDE3NTkzMDYwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Luxury property tour videos with cinematic editing and professional presentation.",
    year: "2024",
    platforms: ["YouTube", "Website"],
  },
  {
    id: "archive-8",
    client: "Gaming Channel",
    category: "Gaming Content",
    thumbnail: "https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NTkxODQwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Gaming highlights, montages, and stream edits for Twitch and YouTube gaming content.",
    year: "2023",
    platforms: ["Twitch", "YouTube"],
  },
  {
    id: "archive-9",
    client: "Educational Platform",
    category: "E-Learning",
    thumbnail: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTkyNzE4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Educational video production and course content editing for online learning platform.",
    year: "2024",
    platforms: ["Website", "YouTube"],
  },
  {
    id: "archive-10",
    client: "Fashion Boutique",
    category: "Fashion Content",
    thumbnail: "https://images.unsplash.com/photo-1570857502809-08184874388e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzU5MjMyNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Seasonal collection lookbooks and style guide videos for boutique fashion brand.",
    year: "2023",
    platforms: ["Instagram", "TikTok"],
  },
  {
    id: "archive-11",
    client: "Travel Vlogger",
    category: "Travel Content",
    thumbnail: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzU5MjMyMjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Adventure travel vlogs with dynamic editing and destination showcases.",
    year: "2023",
    platforms: ["YouTube", "Instagram"],
  },
  {
    id: "archive-12",
    client: "Non-Profit Organization",
    category: "Social Impact",
    thumbnail: "https://images.unsplash.com/photo-1652257975351-090e0b9cf8c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwY29tbXVuaXR5fGVufDF8fHx8MTc1OTMwNjAzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Awareness campaign videos and impact storytelling for charitable organization.",
    year: "2024",
    platforms: ["Facebook", "YouTube"],
  },
];
