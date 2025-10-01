'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Zap, Target, Users, Lightbulb, CheckCircle, ExternalLinkIcon, ZapIcon } from 'lucide-react';
import Link from 'next/link';

export const backgroundStyle = {
  backgroundImage: `
    radial-gradient(rgb(0, 0, 255, 0.15) 0%, transparent 10%),
    radial-gradient(rgb(0, 0, 255, 0.15) 0%, transparent 10%)
  `,
  backgroundPosition: '0px 0px, 28px 28px',
  backgroundSize: '56px 56px',
  backgroundColor: 'rgb(255, 255, 255)'
};

export default function Home() {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);

  const handleStartQuiz = () => {
    setIsStarting(true);
    setTimeout(() => {
      router.push('/quiz');
    }, 500);
  };

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalized Analysis',
      description: 'Get recommendations tailored to your specific project needs and experience level'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Modern Tech Stacks',
      description: 'Discover the latest technologies and frameworks used by top companies'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Matching',
      description: 'Our algorithm considers your skills, timeline, and project requirements'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Considerations',
      description: 'Recommendations factor in team size and collaboration needs'
    }
  ];

  const benefits = [
    'Save hours of research time',
    'Avoid costly technology mistakes',
    // 'Get expert-level recommendations',
    // 'Learn about new technologies',
    'Make informed decisions',
    // 'Accelerate project planning'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" >
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4" >
          <div className="flex items-center justify-between" >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Stack Advisor
              </h1>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              Free Tool
            </Badge>
          </div>
        </div>
      </header>

      <div className="w-full" style={backgroundStyle}>

        <section className="container mx-auto px-4 py-16 text-center w-full" >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ZapIcon className="w-4 h-4" />
              <span>Includes Trending Techs</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the Perfect
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Tech Stack
              </span>
              for Your Project
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Take our intelligent quiz to get personalized technology recommendations based on your 
              project requirements, experience level, and constraints.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={handleStartQuiz}
                disabled={isStarting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl hover:scale-[0.96] transition-all duration-300 transform"
              >
                {isStarting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Starting Quiz...</span>
                  </div>
                ) : (
                  <>
                    Start Quiz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
                <Link href='https://github.com/krishnanpandya007/tech_stack_advisor/tree/main'>
                  <Button 
                    size="lg" 
                    className="rounded-xl bg-white text-black border border-black hover:bg-white"
                    >
                    Github Repo
                    <ExternalLinkIcon className='ml-2 w-5 h-5 ' color='black' />
                  </Button>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-start space-x-2 text-sm text-gray-600 p-2 rounded-l" style={{backgroundColor: "#fafff8ff", border: '1px solid #59AC7730'}}>
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className='text-left'>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our intelligent system analyzes multiple factors to provide you with the most suitable technology recommendations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-blue transition-all duration-300 transform bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Tech Stack?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of developers who have made smarter technology decisions with our recommendations
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleStartQuiz}
              disabled={isStarting}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isStarting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <span>Starting Quiz...</span>
                </div>
              ) : (
                <>
                  Take the Quiz Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Tech Stack Advisor. Made with ❤️ by @krishnanpandya007 for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
