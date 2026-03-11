import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const bookmarks = [
  {
    title: 'Building Serverless Systems on AWS',
    description: 'My journey building a scalable employee management system using Lambda and DynamoDB.',
    url: '#',
    tags: ['AWS', 'Serverless'],
    date: 'Aug 2024',
  },
  {
    title: 'The Future of AI Voice Assistants',
    description: 'Integrating LLaMA2 with React and Node.js for a more natural Jarvis experience.',
    url: '#',
    tags: ['AI', 'LLM'],
    date: 'Jan 2025',
  },
  {
    title: 'Salesforce Development Tips',
    description: 'Improving sales team efficiency through Lightning framework customizations.',
    url: '#',
    tags: ['Salesforce', 'Dev'],
    date: 'Oct 2024',
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Strategies for reducing AWS infrastructure costs by up to 20% through usage analysis.',
    url: '#',
    tags: ['Cloud', 'AWS'],
    date: 'Jul 2024',
  },
];

const SafariApp: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      {/* URL Bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30" style={{ background: 'hsla(220, 14%, 96%, 0.5)' }}>
        <div className="flex-1 rounded-md px-3 py-1.5 text-xs text-muted-foreground" style={{ background: 'hsla(220, 14%, 92%, 0.8)' }}>
          blog.mugasalarohit.dev
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6" style={{ background: 'hsla(0, 0%, 100%, 0.3)' }}>
        <h2 className="text-lg font-semibold text-foreground mb-1">Articles & Insights</h2>
        <p className="text-xs text-muted-foreground mb-5">Thoughts on Cloud, AI, and Software Engineering</p>

        <div className="space-y-3">
          {bookmarks.map((post) => (
            <article
              key={post.title}
              className="group p-4 rounded-xl smooth-transition cursor-pointer hover:bg-accent/60"
              style={{ background: 'hsla(0, 0%, 100%, 0.5)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-foreground group-hover:text-primary smooth-transition flex items-center gap-1">
                    {post.title}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 smooth-transition" />
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{post.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[10px] text-muted-foreground ml-auto">{post.date}</span>
                  </div>
                </div>
                <Star className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary/50 smooth-transition shrink-0 mt-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafariApp;