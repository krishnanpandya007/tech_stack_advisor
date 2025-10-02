'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ArrowLeft, ArrowRight, Code, CheckCircle } from 'lucide-react';
import { quizQuestions } from '@/lib/quiz-data';
import { backgroundStyle } from '@/lib/utils';
import Link from 'next/link';

export default function QuizPage() {
  // const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === question.id)?.value;
  };

  const updateAnswer = (value) => {
    setAnswers(prev => {
      const existing = prev.findIndex(a => a.questionId === question.id);
      const newAnswer = { questionId: question.id, value };
      
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = newAnswer;
        return updated;
      }
      return [...prev, newAnswer];
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const profile = {};
    answers.forEach(answer => {
      profile[answer.questionId] = answer.value;
    });

    localStorage.setItem('quizAnswers', JSON.stringify(profile));
    
    setTimeout(() => {
      // router.push('/results');
      window.open('/results', '_blank').focus();
      setIsSubmitting(false);

    }, 1000);
  };

  const isCurrentAnswerValid = () => {
    const currentAnswer = getCurrentAnswer();
    if (!question.required) return true;
    
    if (question.type === 'checkbox') {
      return Array.isArray(currentAnswer) && currentAnswer.length > 0;
    }
    if(question.type == "slider"){
      return true;
    }
    
    return currentAnswer !== undefined && currentAnswer !== '';
  };

  const renderQuestionInput = () => {
    const currentAnswer = getCurrentAnswer();

    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <div
                key={index}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-300 ${
                  currentAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => updateAnswer(option)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    currentAnswer === option
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {currentAnswer === option && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'checkbox':
        const selectedOptions = Array.isArray(currentAnswer) ? currentAnswer : [];
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <div
                key={index}
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-300 ${
                  selectedOptions.includes(option)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => {
                  const newSelection = selectedOptions.includes(option)
                    ? selectedOptions.filter(item => item !== option)
                    : [...selectedOptions, option];
                  updateAnswer(newSelection);
                }}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    checked={selectedOptions.includes(option)}
                    onChange={() => {}}
                    className="pointer-events-none"
                  />
                  <span className="font-medium text-gray-900">{option}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'slider':
        const sliderValue = typeof currentAnswer === 'number' ? currentAnswer : question.min || 1;
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {sliderValue}
              </div>
              <div className="text-sm text-gray-500">
                {sliderValue === 1 ? 'developer' : 'developers'}
              </div>
            </div>
            <Slider
              value={[sliderValue]}
              onValueChange={(value) => updateAnswer(value[0])}
              min={question.min || 1}
              max={question.max || 10}
              step={question.step || 1}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>{question.min || 1}</span>
              <span>{question.max || 10}</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 h-full" style={backgroundStyle}>

      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href={'/'} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Stack Advisor
              </h1>
            </Link>
            <Badge variant="secondary">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </Badge>
          </div>
        </div>
      </header>

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Progress value={progress} className="flex-1" />
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className=" border-black/1 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              
              <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-600">
                  {currentQuestion + 1}
                </div>
              </div>
                {question.question}
              </CardTitle>
              {question.description && (
                <CardDescription className="text-lg text-gray-600 mt-2">
                  {question.description}
                </CardDescription>
              )}
            </CardHeader>
            
            <CardContent className="space-y-6">
              {renderQuestionInput()}
              
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!isCurrentAnswerValid() || isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : currentQuestion === quizQuestions.length - 1 ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Get Results</span>
                    </>
                  ) : (
                    <>
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
