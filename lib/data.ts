export interface Project {
  id: string
  title: string
  thumb: string
}

export interface Metric {
  value: string
  label: string
}

export interface Visual {
  type: 'video' | 'image'
  src: string
  thumb?: string
  caption: string
}

export interface CaseStudy {
  client: string
  title: string
  metrics: Metric[]
  summary: string
  challenge: string
  solution: string
  execution: string
  visuals: Visual[]
  results: string
  closing: string
}

export interface ArchiveItem {
  client: string
  category: string
  thumb: string
  description: string
  year: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Julian Dorey',
    thumb: 'https://thedigestonline.com/wp-content/uploads/2024/09/Screenshot-2024-01-04-at-5.36.23%E2%80%AFPM-e1706995337481.jpg',
  },
  {
    id: '2',
    title: 'Jack Hampton',
    thumb: '/images/jack-thumb.jpg',
  },
  {
    id: '3',
    title: 'Jordan Lee',
    thumb: '/images/jordanlee.jpg',
  },
  {
    id: '4',
    title: 'Omega Luke',
    thumb: 'https://fenregistrophies.co.uk/wp-content/uploads/2025/03/Untitled-design-2025-03-05T122856.308.png',
  },
  {
    id: '5',
    title: 'Nutralife',
    thumb: 'https://m.media-amazon.com/images/I/71olL3xYMgL.jpg',
  },
  {
    id: '6',
    title: 'Sparrow Claims',
    thumb: 'https://exq58mhsbtg7hjkh.public.blob.vercel-storage.com/logo-with-gradient-3dadm0GkpXOTjg48Z0awd3qok2NLoB.png',
  },
]

export const CASE_STUDIES: Record<string, CaseStudy> = {
  '1': {
    client: 'Julian Dorey',
    title: 'Julian Dorey Podcast',
    metrics: [
      { value: 'Significant', label: 'Reach Growth' },
      { value: 'Expanded', label: 'New Audiences' },
      { value: 'Strong', label: 'Engagement' },
    ],
    summary:
      'Transformed long-form podcast content into growth engines — amplifying reach, building brand recognition, and driving traffic directly to the core content.',
    challenge:
      "While Julian's podcasts offered incredible depth, the length of each episode made it harder to capture new viewers scrolling on platforms like YouTube Shorts, TikTok, or Instagram Reels. The goal was clear: repurpose long-form content into highly engaging short-form clips that could attract new viewers and funnel them back into the main show.",
    solution:
      "We worked closely with Julian to plan & execute a short-form content strategy aligned with his audience. We clipped and edited episodes into sharp, fast-paced shorts while retaining his thoughtful tone. We developed a recognizable visual style that made the clips stand out in crowded feeds.",
    execution:
      "Each clip was carefully selected to balance curiosity, controversy, and insight — the kind of moments that stop a scroll. The editing style was tailored to Julian's brand: clean, modern, and professional without over-stylization. Consistency across clips helped build recognition.",
    visuals: [
      {
        type: 'video',
        src: 'https://www.youtube.com/shorts/4hJCaoscCa4',
        thumb: 'https://i.ytimg.com/vi/4hJCaoscCa4/hqdefault.jpg',
        caption: 'Example of optimized short-form content',
      },
      {
        type: 'image',
        src: 'https://thedigestonline.com/wp-content/uploads/2024/09/Screenshot-2024-01-04-at-5.36.23%E2%80%AFPM-e1706995337481.jpg',
        caption: 'Consistent visual branding across content',
      },
    ],
    results:
      'The short-form strategy drove significant growth in attention and reach. Clips consistently generated strong engagement, funneled new audiences to the long-form episodes, and expanded the show\'s visibility across multiple platforms.',
    closing:
      'This project showcased how the right short-form strategy can turn long-form podcasts into growth engines — amplifying reach, building brand recognition, and driving traffic directly to the core content.',
  },
  '2': {
    client: 'Jack Hampton',
    title: 'Jack Hampton',
    metrics: [
      { value: '1M+', label: 'Average Views' },
      { value: 'Cohesive', label: 'Brand Identity' },
      { value: 'Scalable', label: 'Platform Growth' },
    ],
    summary:
      'Transformed consistency and style into measurable growth — both in reach and brand identity across Hampton Sports and The Hampton Show.',
    challenge:
      'Jack had two ambitious goals: scale his short-form content to grow audience reach, and establish a fresh identity for The Hampton Show, setting it apart from Hampton Sports while staying true to his voice.',
    solution:
      'We partnered with Jack to run both channels across all social platforms, ensuring consistent, professional content distribution. We introduced new touches to his style, refining visuals and pacing to maximize audience retention. We launched The Hampton Show with new styles, templates, and formats.',
    execution:
      "On Hampton Sports, the focus was scalable short-form edits designed for virality. On The Hampton Show, we developed a distinct style language — fresh branding, pacing, and presentation — to differentiate it from his main channel. Collaboration went beyond editing: we actively participated in creative ideation.",
    visuals: [
 {
      type: 'video',
      src: 'https://www.youtube.com/shorts/m-DDR9VC7Dg',
      thumb: '/images/jackthumbnail1.jpg',
      caption: 'Hampton Sports viral short-form content',
    },
    {
      type: 'video',
      src: 'https://www.tiktok.com/@hampton.sports/video/7482919997363244318',
      thumb: '/images/jackthumbnail2.png',
      caption: 'Cross-platform content distribution',
    },
  ],
    results:
      'Hampton Sports Shorts averaged around 1 million views per video, establishing Jack as a consistent voice in sports commentary. The Hampton Show successfully launched with a clear identity and strong early audience engagement.',
    closing:
      'By combining high-performing short-form strategies with creative input for long-form branding, we helped Jack Hampton turn consistency and style into measurable growth.',
  },
  '3': {
    client: 'Jordan Lee',
    title: 'Jordan Lee',
    metrics: [
      { value: 'Cohesive', label: 'Brand Identity' },
      { value: 'Flexible', label: 'Content System' },
      { value: 'Expanded', label: 'Brand Awareness' },
    ],
    summary:
      'Transformed his channel into a powerful personal brand engine — one that inspires, educates, and builds trust at the same time.',
    challenge:
      'Jordan\'s vision was to create a channel that functioned as a life documentary, showcasing not just his entrepreneurial insights but also the day-to-day reality behind the grind. The challenge was balancing personal storytelling, business credibility, and engaging content formats.',
    solution:
      'We collaborated with Jordan to refine and adapt content styles across vlogs, podcasts, and documentary-style videos. We highlighted the personal brand angle, ensuring each video carried both relatability and authority.',
    execution:
      'Each video was crafted to combine storytelling and value delivery: Vlogs gave a behind-the-scenes look. Podcasts provided depth and credibility. Business-focused content packaged key lessons into digestible formats. Documentaries tied everything together, elevating the personal brand.',
    visuals: [
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=Vp91V1G1XUc',
        thumb: 'https://i.ytimg.com/vi/Vp91V1G1XUc/hqdefault.jpg',
        caption: 'Documentary-style entrepreneurial storytelling',
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=wUCRCIWWwfo',
        thumb: 'https://i.ytimg.com/vi/wUCRCIWWwfo/hqdefault.jpg',
        caption: 'Educational business content with narrative structure',
      },
    ],
    results:
      'Built a cohesive brand identity that positioned Jordan as a relatable but authoritative voice in entrepreneurship. Established a content system flexible enough to cover multiple formats while keeping a consistent brand story.',
    closing:
      'By combining documentary-style storytelling with educational and personal elements, we helped Jordan Lee transform his channel into a powerful personal brand engine.',
  },
  '4': {
    client: 'Omega Luke',
    title: 'Omega Luke',
    metrics: [
      { value: 'Enhanced', label: 'Visual Quality' },
      { value: 'Positive', label: 'Viewer Response' },
      { value: 'Professional', label: 'Brand Identity' },
    ],
    summary:
      'Enhanced audience experience without losing the authenticity that makes his channel unique — bridging the missing piece that took his videos to the next level.',
    challenge:
      'While the ideas and challenges were engaging, the content lacked the visual polish and clarity needed to maximize impact. The goal was to take Omega Luke\'s already-strong creative direction and enhance it with sharper visuals and stronger sound design.',
    solution:
      'We worked with Luke to redesign the video style, introducing new visuals, overlays, and transitions. We implemented refined sound design to improve clarity, pacing, and overall watchability. We kept the lighthearted and fun tone of his videos intact.',
    execution:
      'The new style combined clear visual structure with crisper audio edits, making the videos not only more engaging but also easier for viewers to follow. Subtle enhancements to pacing and transitions ensured smoother flow throughout each challenge.',
    visuals: [
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=UN8RA7bazYE',
        thumb: 'https://i.ytimg.com/vi/UN8RA7bazYE/hqdefault.jpg',
        caption: 'Polished Football Manager content with enhanced visuals',
      },
      {
        type: 'video',
        src: 'https://www.youtube.com/watch?v=IrPtmkxlHVw',
        thumb: 'https://i.ytimg.com/vi/IrPtmkxlHVw/hqdefault.jpg',
        caption: 'Professional presentation with maintained personality',
      },
    ],
    results:
      'Viewers responded positively to the upgraded quality, with improved clarity and presentation enhancing the entertainment factor. The updated visuals created a more professional brand identity, positioning Omega Luke to stand out in the Football Manager niche.',
    closing:
      'By refining the visuals and sound design, we helped Omega Luke transform creative content into a polished, professional product.',
  },
  '5': {
    client: 'Nutralife',
    title: 'Nutralife',
    metrics: [
      { value: 'Direct Boost', label: 'Sales Impact' },
      { value: 'Unique', label: 'Brand Identity' },
      { value: 'Flexible', label: 'Style System' },
    ],
    summary:
      'Transformed social media presence into a consistent revenue driver with a clean, sales-driven content style unique to their brand.',
    challenge:
      'In the competitive wellness space, standing out requires more than just a strong product. Nutralife needed a content style that was recognizable, on-brand, and built to convert, while still being flexible enough to work across various campaigns.',
    solution:
      "We worked with Nutralife to develop a distinct style tailored to the brand's identity — clean, modern, and trustworthy. We ensured the visuals felt original to Nutralife, differentiating them from competitors in the health market.",
    execution:
      "Created templates and visual systems that made Nutralife's content instantly recognizable. Applied consistent styling across product posts and campaigns. Integrated clear calls-to-action and product showcases, ensuring content wasn't just engaging but sales-driven.",
    visuals: [
      {
        type: 'image',
        src: 'https://www.mynumara.com/cdn/shop/files/Buy_1_Get_1_Free_5.png',
        caption: 'Clean, modern wellness brand content',
      },
      {
        type: 'image',
        src: 'https://www.mynumara.com/cdn/shop/files/a_Sweet.png?v=1751698065',
        caption: 'Sales-driven product presentations',
      },
    ],
    results:
      'The new content style directly boosted sales, turning social engagement into measurable business results. Established a unique visual identity for Nutralife on Instagram. Built a flexible style system that Nutralife could continue using for future campaigns.',
    closing:
      'By building a clean, sales-driven content style unique to their brand, we helped Nutralife transform social media presence into a consistent revenue driver.',
  },
  '6': {
    client: 'Sparrow Claims',
    title: 'Sparrow Claims',
    metrics: [
      { value: '20M+', label: 'Video Views' },
      { value: 'Strong', label: 'Platform Presence' },
      { value: 'Boosted', label: 'Sales Impact' },
    ],
    summary:
      'Turned social media into a growth engine — driving both popularity and measurable sales in an industry where few competitors existed.',
    challenge:
      "Insurance isn't exactly the type of content people expect to go viral. Sparrow Claims needed a fresh, attention-grabbing style that could work across TikTok, Instagram, YouTube Shorts, and more — to build recognition, generate leads, and boost sales.",
    solution:
      'I worked with Sparrow Claims to develop an original video style that no one else in the niche was using. We created content that was both approachable and authoritative, simplifying complex information and optimizing each piece for virality.',
    execution:
      'Introduced a signature content style with clean visuals, clear messaging, and engaging editing. Published consistently across TikTok, Instagram Reels, YouTube Shorts, and more. Balanced educational value with entertaining delivery, keeping viewers engaged while positioning the brand as a trusted expert.',
    visuals: [
      {
      type: 'video',
      src: 'https://www.tiktok.com/@sparrowclaims/video/7503595068205403435',
      thumb: '/images/sparrowthumbnail1.png',
      caption: 'Viral insurance content on TikTok',
    },
    {
      type: 'video',
      src: 'https://www.instagram.com/sparrow.claims/reel/DEYZ9qgxw-2/',
      thumb: '/images/sparrowthumbnail2.jpg',
      caption: 'Cross-platform insurance education content',
    },
  ],
    results:
      'Numerous videos exceeded 1M+ views, creating viral momentum across platforms. The viral traction directly translated into boosted sales and lead generation for Sparrow Claims. Built a strong, recognizable brand presence where few competitors existed.',
    closing:
      'By creating a content style unique to their industry and scaling it across every platform, we helped Sparrow Claims turn social media into a growth engine.',
  },
}

export const ARCHIVE: ArchiveItem[] = [
  {
    client: 'Content Creator A',
    category: 'Short-Form Content',
    thumb: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80',
    description: 'Viral short-form content strategy delivering consistent engagement across TikTok and Instagram Reels.',
    year: '2024',
    tags: ['TikTok', 'Instagram', 'YouTube Shorts'],
  },
  {
    client: 'Lifestyle Brand',
    category: 'Brand Content',
    thumb: 'https://images.unsplash.com/photo-1601735584002-14784ded7865?w=600&q=80',
    description: 'Comprehensive social media content creation and brand storytelling for lifestyle e-commerce brand.',
    year: '2024',
    tags: ['Instagram', 'Facebook'],
  },
  {
    client: 'Fitness Influencer',
    category: 'Personal Brand',
    thumb: 'https://images.unsplash.com/photo-1618688862225-ac941a9da58f?w=600&q=80',
    description: 'Workout video editing and motivational content creation for growing fitness community.',
    year: '2023',
    tags: ['YouTube', 'Instagram'],
  },
  {
    client: 'Tech Startup',
    category: 'Product Launch',
    thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    description: 'Product announcement videos and explainer content for SaaS platform launch campaign.',
    year: '2024',
    tags: ['LinkedIn', 'YouTube'],
  },
  {
    client: 'Food & Beverage',
    category: 'Commercial Content',
    thumb: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=600&q=80',
    description: 'Recipe videos and restaurant promotional content with appetizing visual storytelling.',
    year: '2023',
    tags: ['Instagram', 'TikTok'],
  },
  {
    client: 'Music Artist',
    category: 'Music Video',
    thumb: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
    description: 'Music video editing and visual effects for independent artist album release.',
    year: '2023',
    tags: ['YouTube', 'Instagram'],
  },
  {
    client: 'Real Estate Agency',
    category: 'Property Showcase',
    thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    description: 'Luxury property tour videos with cinematic editing and professional presentation.',
    year: '2024',
    tags: ['YouTube', 'Website'],
  },
  {
    client: 'Gaming Channel',
    category: 'Gaming Content',
    thumb: 'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?w=600&q=80',
    description: 'Gaming highlights, montages, and stream edits for Twitch and YouTube gaming content.',
    year: '2023',
    tags: ['Twitch', 'YouTube'],
  },
  {
    client: 'Educational Platform',
    category: 'E-Learning',
    thumb: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=600&q=80',
    description: 'Educational video production and course content editing for online learning platform.',
    year: '2024',
    tags: ['Website', 'YouTube'],
  },
  {
    client: 'Fashion Boutique',
    category: 'Fashion Content',
    thumb: 'https://images.unsplash.com/photo-1570857502809-08184874388e?w=600&q=80',
    description: 'Seasonal collection lookbooks and style guide videos for boutique fashion brand.',
    year: '2023',
    tags: ['Instagram', 'TikTok'],
  },
  {
    client: 'Travel Vlogger',
    category: 'Travel Content',
    thumb: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&q=80',
    description: 'Adventure travel vlogs with dynamic editing and destination showcases.',
    year: '2023',
    tags: ['YouTube', 'Instagram'],
  },
  {
    client: 'Non-Profit Organization',
    category: 'Social Impact',
    thumb: 'https://images.unsplash.com/photo-1652257975351-090e0b9cf8c4?w=600&q=80',
    description: 'Awareness campaign videos and impact storytelling for charitable organization.',
    year: '2024',
    tags: ['Facebook', 'YouTube'],
  },
]

export const SERVICES = [
  'Video Editing',
  'Short-Form Content',
  'Long-Form Content',
  'Brand Strategy',
  'Social Media',
  'Podcast Production',
  'Motion Design',
  'Content Marketing',
  'Storytelling',
]

export const TESTIMONIALS = [
  {
    quote: '"frameMade transformed our raw footage into something truly engaging. Their attention to pacing and storytelling is incredible."',
    name: '— Julian Dorey',
  },
  {
    quote: '"Working with frameMade was seamless. They understood our vision immediately and delivered beyond expectations."',
    name: '— Jack Hampton',
  },
  {
    quote: '"The quality and turnaround time exceeded our expectations. frameMade\'s editing style perfectly matched our brand."',
    name: '— Nutralife',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Concept & Script',
    description: 'Aligning vision and understanding your story before a single frame is cut.',
  },
  {
    number: '02',
    title: 'Editing & Effects',
    description: 'Crafting engaging visuals, seamless flow, and sound design that locks attention.',
  },
  {
    number: '03',
    title: 'Delivery & Revisions',
    description: 'Ensuring quality and your complete satisfaction before final delivery.',
  },
]
