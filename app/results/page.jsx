'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  ArrowLeft, 
  Download, 
  Share2, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Star,
  Crown,
  CornerDownRight,
  ExternalLinkIcon,
  SquareArrowOutUpRightIcon,
  Braces,
  Github
} from 'lucide-react';
import { calculateTechStackScores } from '@/lib/tech-stacks';
import { backgroundStyle } from '@/lib/utils';
import Link from 'next/link';

export default function ResultsPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let savedAnswers = null
      if (typeof window !== 'undefined') {

         savedAnswers = localStorage.getItem('quizAnswers');
      }

    if (!savedAnswers) {
      router.push('/');
      return;
    }

    const profile = JSON.parse(savedAnswers);
    setUserProfile(profile);
    
    // Calculate recommendations
    const scored = calculateTechStackScores(profile);
    setRecommendations(scored);
    setTimeout(() => {

      setIsLoading(false);
    }, 1000)
  }, [router]);

  const handleRetakeQuiz = () => {
    localStorage.removeItem('quizAnswers');
    router.push('/quiz');
  };

  const handleExportResults = () => {
    const results = {
      profile: userProfile,
      recommendations: recommendations.slice(0, 3),
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tech-stack-recommendations.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getLearningCurveColor = (curve) => {
    switch (curve) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
          <h2 className="text-xl font-semibold text-gray-900">Analyzing Your Requirements...</h2>
          <p className="text-gray-600 mt-2">Finding the perfect tech stack for your project</p>
        </div>
      </div>
    );
  }

  const topRecommendation = recommendations[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" style={backgroundStyle}>
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href={'/'} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tech Stack Advisor
                </h1>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleExportResults}>
                <Braces className="w-4 h-4 mr-2" />
                Export
              </Button>
              {/* <Button variant="outline" size="sm"> */}
                {/* <Github className="w-5 h-5" /> */}
                {/* Share */}
              {/* </Button> */}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">

  <div className="text-center space-y-3">
    <div className="inline-flex items-center gap-2 bg-success-muted text-success px-3 py-1.5 rounded-full text-sm font-medium" style={{backgroundColor: "#ECFAE599", border: '1px solid #B0DB9C80'}}>
      <CheckCircle className="w-3.5 h-3.5 text-green" />
      <span>Analysis Complete</span>
    </div>
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-2">
        Recommendations for you
      </h1>
      <p className="text-muted-foreground text-base max-w-xl mx-auto">
        Personalized technology stacks ranked with learning curve level.
      </p>
    </div>
  </div>

  <Card className="border border-primary/20 bg-gradient-to-r from-neutral-light to-accent/50 shadow-sm">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-primary text-primary-foreground text-xs px-2 py-0.5">
              <Crown className='w-3.5 h-3.5 text-yellow mr-1' fill='gold' stroke='yellow' />  Top Choice
            </Badge>
          </div>
          <CardTitle className="text-xl font-bold text-foreground mb-1">
            {topRecommendation.name}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            {topRecommendation.description}
          </CardDescription>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-2xl font-bold text-primary mb-0.5" >
            <Badge variant="outline" className={`text-xs px-2 py-0.5 ${getLearningCurveColor(topRecommendation.learningCurve)}`}>
              {topRecommendation.learningCurve}
            </Badge>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-success" />
            Key Benefits
          </h4>
          <ul className="space-y-1">
            {topRecommendation.pros.slice(0, 3).map((pro, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-success mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-xs">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2 flex items-center gap-1">
            <span className=" text-center">
              <Star className="w-3.5 h-3.2 text-success"/>
            </span>
            Best For
          </h4>
          <div className="flex flex-wrap gap-1">
            {topRecommendation.bestFor.map((use, index) => (
              <Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
                {use}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Compact Tabs */}
  <Tabs defaultValue="recommendations" className="space-y-4">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="recommendations" className="text-sm">All Results</TabsTrigger>
      <TabsTrigger value="profile" className="text-sm">Your Profile</TabsTrigger>
    </TabsList>

    <TabsContent value="recommendations" className="space-y-3">
      {recommendations.slice(0, 5).map((stack, index) => (
        <Card key={stack.id} className="shadow-sm hover:shadow-md transition-shadow border border-neutral-border">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                  <span className="font-semibold text-primary text-sm ">{index + 1}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-lg font-bold text-foreground mb-1">
                    {stack.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {stack.description}
                  </CardDescription>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <Badge variant="outline" className={`text-xs px-2 py-0.5 ${getLearningCurveColor(stack.learningCurve)}`}>
                  {stack.learningCurve}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid md:grid-cols-4 gap-4 text-xs">
              {/* Tech Stack Grid - More Compact */}
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Frontend</h4>
                  <div className="space-y-1">
                    {stack.frontend.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-sm"><CornerDownRight className='w-3.5 h-3.5' /></span>
                        <a target="_blank" rel="noopener noreferrer" href={tech.documentation_link}>
                          <span className="text-xs text-muted-foreground underline">{tech.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Backend</h4>
                  <div className="space-y-1">
                    {stack.backend.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-sm"><CornerDownRight className='w-3.5 h-3.5' /></span>
                        <a href={tech.documentation_link} target="_blank" rel="noopener noreferrer" >
                          <span className="text-xs text-muted-foreground underline">{tech.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Database</h4>
                  <div className="space-y-1">
                    {stack.database.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-sm"><CornerDownRight className='w-3.5 h-3.5' /></span>
                        <a href={tech.documentation_link} target="_blank" rel="noopener noreferrer" >
                          <span className="text-xs text-muted-foreground underline">{tech.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1.5">Deploy</h4>
                  <div className="space-y-1">
                    {stack.deployment.map((tech, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-sm"><CornerDownRight className='w-3.5 h-3.5' /></span>
                        <a href={tech.documentation_link} target="_blank" rel="noopener noreferrer" >
                          <span className="text-xs text-muted-foreground underline">{tech.name}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <a href={stack.documentation_link} target="_blank" rel="noopener noreferrer" >
                    <Button 
                    size="sm" 
                    onClick={() => {}}
                    disabled={false}
                    className="rounded-sm bg-white text-black border border-black hover:bg-white text-xs h-8"
                    
                  >
                    Documentation
                    <SquareArrowOutUpRightIcon className='ml-1.5 w-3.5 h-3.5 ' color='black' />
                  </Button>
                  </a> 
                </div>
              </div>

              {/* Compact Pros/Cons */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-success mb-1.5 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Pros
                  </h4>
                  <ul className="space-y-0.5">
                    {stack.pros.slice(0, 2).map((pro, i) => (
                      <li key={i} className="text-xs text-muted-foreground">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-warning mb-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Cons
                  </h4>
                  <ul className="space-y-0.5">
                    {stack.cons.slice(0, 2).map((con, i) => (
                      <li key={i} className="text-xs text-muted-foreground">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </TabsContent>

    <TabsContent value="profile">
      <Card className="shadow-sm border border-neutral-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-foreground">Your Project Profile</CardTitle>
          <CardDescription className="text-sm">
            Analysis based on your requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Experience</div>
                  <div className="text-xs text-muted-foreground">{userProfile?.experience}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Project Type</div>
                  <div className="text-xs text-muted-foreground">{userProfile?.projectType}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Timeline</div>
                  <div className="text-xs text-muted-foreground">{userProfile?.timeline}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Team Size</div>
                  <div className="text-xs text-muted-foreground">{userProfile?.teamSize} developers</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Budget</div>
                  <div className="text-xs text-muted-foreground">{userProfile?.budget}</div>
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-1.5">Technologies</div>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(userProfile?.technologies) && userProfile.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-medium text-foreground mb-1.5">Features</div>
                <div className="flex flex-wrap gap-1">
                  {Array.isArray(userProfile?.features) && userProfile.features.slice(0, 4).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>

  {/* Compact Action Buttons */}
  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
    <Button variant="outline" size="sm" onClick={handleRetakeQuiz} className="flex items-center gap-2">
      <ArrowLeft className="w-4 h-4" />
      Retake Quiz
    </Button>
  </div>
</div>

    </div>
  );
}


