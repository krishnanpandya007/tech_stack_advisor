import React from 'react'

import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProfileCard = ({
  name = "John Doe",
  location = "San Francisco, CA",
  email = "john.doe@example.com",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main Profile Section */}
      <Card className="relative bg-card border-border shadow-lg overflow-visible">
        <div className="p-8 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-primary/30 to-transparent rounded-full" />
          </div>

          {/* Name */}
          <h2 className="text-3xl font-bold text-foreground mb-8">{name}</h2>

          {/* Branching Sections Container */}
          <div className="w-full space-y-6">
            {/* Location Branch */}
            <div className="relative flex items-start gap-4 pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--icon-background))] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-sm font-medium text-muted-foreground">Location</p>
                <p className="text-base text-foreground">{location}</p>
              </div>
            </div>

            {/* Social Links Branch */}
            <div className="relative flex items-start gap-4 pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/15 to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-primary/20 to-transparent" />
              
              <div className="flex-1 pt-2">
                <p className="text-sm font-medium text-muted-foreground mb-3">Social Links</p>
                <div className="flex gap-3">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border-2 border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-md bg-card"
                    >
                      <Github className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border-2 border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-md bg-card"
                    >
                      <Linkedin className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border-2 border-border hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:shadow-md bg-card"
                    >
                      <Twitter className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Email Branch */}
            <div className="relative flex items-start gap-4 pl-8">
              <div className="absolute left-0 top-0 h-1/2 w-px bg-gradient-to-b from-primary/15 to-transparent" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-primary/15 to-transparent" />
              
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--icon-background))] flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-base text-foreground hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
