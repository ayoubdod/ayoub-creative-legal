import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, Calendar, MapPin, Palette, Eye, ExternalLink } from "lucide-react";
import artGalleryBg from "@/assets/art-gallery-bg.jpg";

export function ArtSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const artworks = [
    {
      id: 1,
      title: "Abstract Contemplation",
      medium: "Oil on Canvas",
      size: "100x80 cm",
      year: "2023",
      description: "A modern interpretation of legal concepts through abstract forms, exploring the intersection of justice and human emotion.",
      category: "Abstract",
      status: "Available",
      price: "€2,500"
    },
    {
      id: 2,
      title: "Digital Justice",
      medium: "Mixed Media",
      size: "80x60 cm", 
      year: "2023",
      description: "Contemporary artwork representing the digital transformation of legal systems and the future of jurisprudence.",
      category: "Contemporary",
      status: "Sold",
      price: "€1,800"
    },
    {
      id: 3,
      title: "Tamsna Prize Winner",
      medium: "Acrylic on Canvas",
      size: "120x90 cm",
      year: "2018",
      description: "The award-winning piece from Tamsna International Painting Competition, featuring bold colors and expressive brushwork.",
      category: "Competition",
      status: "Award Winner",
      price: "€3,500"
    },
    {
      id: 4,
      title: "Legal Landscape",
      medium: "Watercolor",
      size: "70x50 cm",
      year: "2022",
      description: "Delicate watercolor study exploring the fluid nature of legal interpretation and constitutional principles.",
      category: "Study",
      status: "Private Collection",
      price: "€1,200"
    },
    {
      id: 5,
      title: "Innovation Series #1",
      medium: "Digital Art",
      size: "Digital Print",
      year: "2023",
      description: "First piece in a series exploring the relationship between technological innovation and creative expression.",
      category: "Digital",
      status: "Limited Edition",
      price: "€800"
    }
  ];

  const exhibitions = [
    {
      title: "Tamsna International Painting Competition",
      year: "2018",
      location: "Morocco",
      achievement: "2nd Place",
      type: "Competition"
    },
    {
      title: "Legal Arts Collective Exhibition",
      year: "2022",
      location: "Casablanca",
      achievement: "Featured Artist",
      type: "Group Show"
    },
    {
      title: "Plumartistes Annual Showcase",
      year: "2023",
      location: "Rabat",
      achievement: "Co-Curator",
      type: "Collective"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  return (
    <section 
      id="art" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), url(${artGalleryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-heading mb-4">
            Art & <span className="bg-gradient-primary bg-clip-text text-transparent">Creativity</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of legal thinking and artistic expression through 
            contemporary painting and mixed media works.
          </p>
        </div>

        {/* Featured Artwork Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-card/95 backdrop-blur-sm shadow-elegant animate-scale-in">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Artwork Display */}
                <div className="relative bg-gradient-card min-h-96 flex items-center justify-center">
                  {/* Placeholder for artwork image */}
                  <div className="w-80 h-64 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Palette className="h-16 w-16 text-primary/40" />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {artworks.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? "bg-primary" : "bg-primary/30"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Artwork Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={artworks[currentSlide].status === 'Available' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {artworks[currentSlide].status}
                    </Badge>
                    {artworks[currentSlide].status === 'Award Winner' && (
                      <Award className="h-5 w-5 text-primary" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{artworks[currentSlide].title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {artworks[currentSlide].medium} • {artworks[currentSlide].size} • {artworks[currentSlide].year}
                  </p>
                  
                  <p className="text-body leading-relaxed mb-6">
                    {artworks[currentSlide].description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline" className="bg-primary/5">
                      {artworks[currentSlide].category}
                    </Badge>
                    <span className="text-lg font-semibold text-primary">
                      {artworks[currentSlide].price}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-primary hover:shadow-glow">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exhibitions & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Exhibitions */}
          <div className="animate-slide-right">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              Exhibitions & Competitions
            </h3>
            <div className="space-y-4">
              {exhibitions.map((exhibition, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm shadow-elegant hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{exhibition.title}</h4>
                        <div className="flex items-center space-x-4 text-caption text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exhibition.year}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exhibition.location}
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exhibition.type}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={exhibition.achievement.includes('Place') ? 'default' : 'outline'}
                          className="font-medium"
                        >
                          {exhibition.achievement}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Artistic Philosophy */}
          <div className="animate-slide-right animation-delay-200">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Palette className="h-5 w-5 text-primary mr-2" />
              Artistic Philosophy
            </h3>
            <Card className="bg-card/80 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-8">
                <blockquote className="text-body leading-relaxed mb-6 italic">
                  "Art and law share a common foundation: both seek to interpret, 
                  understand, and give form to the complexities of human experience. 
                  Through painting, I explore the same questions that drive my legal work—
                  justice, balance, and the search for truth."
                </blockquote>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Inspiration Sources</h4>
                    <p className="text-caption text-muted-foreground leading-relaxed">
                      Legal concepts, technological innovation, human rights, and the 
                      intersection of traditional and modern interpretations of justice.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Artistic Techniques</h4>
                    <p className="text-caption text-muted-foreground leading-relaxed">
                      Mixed media approaches combining traditional painting with digital elements, 
                      exploring texture, color theory, and symbolic representation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in animation-delay-800">
          <Card className="max-w-2xl mx-auto bg-gradient-card/80 backdrop-blur-sm shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-heading mb-4">Commission & Collections</h3>
              <p className="text-body text-muted-foreground mb-6">
                Interested in commissioning a piece or learning more about available works? 
                Let's discuss how art can enhance your space or collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow">
                  Commission Artwork
                  <Palette className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">
                  View Full Gallery
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}