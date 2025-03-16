import { BackgroundCircles } from '../../components/BackgroundCircles';
import Waves from '../../components/Waves';
import Carousel from '@/components/Carousel';
import FullWidthImage from '@/components/FullImage'
import ContentBlurb from '@/components/ContentBlurb';


export default function SEOPage() {
  const carouselItems = [
    { 
      src: "/images/lasers-background.png", 
      alt: "Google Analytics Integration", 
      title: "Google Analytics & Search Console",
      description: "Harness the power of data-driven SEO with proper analytics setup. We implement and optimize Google Analytics 4 and Search Console to track performance, identify opportunities, and measure ROI.",
      cta: "Track Your Success",
      ctaLink: "/analytics"
    },
    { 
      src: "/images/autumn.png", 
      alt: "Page Speed Optimization", 
      title: "Page Speed Optimization",
      description: "Achieve 90+ PageSpeed scores with our performance tuning. We optimize images, implement lazy loading, minify code, and leverage browser caching to deliver lightning-fast experiences that rank higher.",
      cta: "Speed Up Your Site",
      ctaLink: "/page-speed"
    },
    { 
      src: "/images/train-platte.png", 
      alt: "On-Page SEO", 
      title: "On-Page SEO Excellence",
      description: "Perfect your content, meta tags, headers, and internal linking structure. Our on-page optimizations ensure search engines understand and value your content, driving higher rankings and traffic.",
      cta: "Optimize Your Pages",
      ctaLink: "/on-page-seo"
    },
    { 
      src: "/images/goat.png", 
      alt: "Core Web Vitals Optimization", 
      title: "Core Web Vitals Optimization",
      description: "Improve your LCP, FID, and CLS scores to boost search rankings. Our optimizations ensure fast load times, responsive interactions, and stable layouts that satisfy both users and search engines.",
      cta: "Improve Your Vitals",
      ctaLink: "/core-web-vitals"
    },
    { 
      src: "/images/river-platte.png", 
      alt: "Technical SEO", 
      title: "Technical SEO Mastery",
      description: "Resolve crawlability issues, optimize site architecture, and implement schema markup. Our technical SEO services create a solid foundation that helps search engines index and rank your content effectively.",
      cta: "Fix Your Foundation",
      ctaLink: "/technical-seo"
    }
  ];

  const contentHeader = 'Why Choose Us?'

  const blurbText = `With over two decades of SEO expertise powering multi-million-dollar 
    businesses and a decade of crafting high-performance websites, we bring professional-grade 
    solutions to your digital doorstep. Our team has honed its skills on sites with 1.2 million 
    daily users, delivering custom-built websites—no cookie-cutter builders like Squarespace that 
    stifle speed and flexibility. You’ll own your site outright, free and clear, with full transfer 
    rights if we ever part ways. Plus, enjoy seamless analytics and Google integration, all at a fraction
     of the cost of typical agencies.`

  return (
    <div className="relative min-h-screen">
      {/* Background element */}
      <BackgroundCircles />
      <ContentBlurb header={contentHeader} text={blurbText}/>
      <FullWidthImage src="/images/google-search-console.png" />
      <Carousel items={carouselItems} />
      <Waves />
    </div>
  );
}