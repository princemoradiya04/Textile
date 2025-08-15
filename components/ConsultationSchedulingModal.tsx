import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Video,
  PhoneCall,
  Users,
  MessageSquare,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

interface ConsultationSchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  // Step 1: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  
  // Step 2: Consultation Preferences  
  consultationType: 'phone' | 'video' | 'in-person' | '';
  preferredDuration: '30' | '60' | '90' | '';
  urgency: 'urgent' | 'this-week' | 'flexible' | '';
  
  // Step 3: Topics & Objectives
  primaryTopics: string[];
  specificObjectives: string;
  currentChallenges: string;
  
  // Step 4: Scheduling
  preferredDates: string[];
  preferredTimes: string[];
  timezone: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  position: '',
  consultationType: '',
  preferredDuration: '',
  urgency: '',
  primaryTopics: [],
  specificObjectives: '',
  currentChallenges: '',
  preferredDates: [],
  preferredTimes: [],
  timezone: '',
  additionalNotes: ''
};

const consultationTopics = [
  'Product Selection & Specifications',
  'Custom Yarn Development',
  'Sustainable Manufacturing Solutions',
  'Quality Standards & Certifications',
  'Supply Chain Optimization',
  'Pricing & Volume Discussions',
  'Technical Support & Integration',
  'Partnership Opportunities',
  'Market Trends & Insights',
  'Innovation & R&D Collaboration'
];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM'
];

const timezones = [
  'UTC-12:00 - International Date Line West',
  'UTC-11:00 - Coordinated Universal Time-11',
  'UTC-10:00 - Hawaii',
  'UTC-09:00 - Alaska',
  'UTC-08:00 - Pacific Time (US & Canada)',
  'UTC-07:00 - Mountain Time (US & Canada)',
  'UTC-06:00 - Central Time (US & Canada)',
  'UTC-05:00 - Eastern Time (US & Canada)',
  'UTC-04:00 - Atlantic Time (Canada)',
  'UTC-03:00 - Brasilia',
  'UTC-02:00 - Mid-Atlantic',
  'UTC-01:00 - Azores',
  'UTC+00:00 - Greenwich Mean Time',
  'UTC+01:00 - Central European Time',
  'UTC+02:00 - Eastern European Time',
  'UTC+03:00 - Moscow, St. Petersburg',
  'UTC+04:00 - Abu Dhabi, Muscat',
  'UTC+05:00 - Islamabad, Karachi',
  'UTC+05:30 - Chennai, Kolkata, Mumbai, New Delhi',
  'UTC+06:00 - Almaty, Dhaka',
  'UTC+07:00 - Bangkok, Hanoi, Jakarta',
  'UTC+08:00 - Beijing, Perth, Singapore',
  'UTC+09:00 - Osaka, Sapporo, Tokyo',
  'UTC+10:00 - Canberra, Melbourne, Sydney',
  'UTC+11:00 - Magadan, Solomon Is.',
  'UTC+12:00 - Auckland, Wellington'
];

export function ConsultationSchedulingModal({ isOpen, onClose }: ConsultationSchedulingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTopicToggle = (topic: string) => {
    const currentTopics = formData.primaryTopics;
    if (currentTopics.includes(topic)) {
      handleInputChange('primaryTopics', currentTopics.filter(t => t !== topic));
    } else {
      handleInputChange('primaryTopics', [...currentTopics, topic]);
    }
  };

  const handleDateToggle = (date: string) => {
    const currentDates = formData.preferredDates;
    if (currentDates.includes(date)) {
      handleInputChange('preferredDates', currentDates.filter(d => d !== date));
    } else if (currentDates.length < 3) {
      handleInputChange('preferredDates', [...currentDates, date]);
    }
  };

  const handleTimeToggle = (time: string) => {
    const currentTimes = formData.preferredTimes;
    if (currentTimes.includes(time)) {
      handleInputChange('preferredTimes', currentTimes.filter(t => t !== time));
    } else {
      handleInputChange('preferredTimes', [...currentTimes, time]);
    }
  };

  const generateUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      // Skip weekends for business consultations
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: `${dayName}, ${dateStr}`
        });
      }
    }
    
    return dates;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setCurrentStep(1);
    setFormData(initialFormData);
    setIsSubmitted(false);
    onClose();
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.company;
      case 2:
        return formData.consultationType && formData.preferredDuration && formData.urgency;
      case 3:
        return formData.primaryTopics.length > 0 && formData.specificObjectives;
      case 4:
        return formData.preferredDates.length > 0 && formData.preferredTimes.length > 0 && formData.timezone;
      case 5:
        return true;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-primary-800 text-white p-6">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="pr-12">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Schedule Consultation
                </h2>
                <p className="text-white/80 text-sm">
                  Connect with our textile experts
                </p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-2 mt-4">
              {[...Array(totalSteps)].map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index + 1 < currentStep ? 'bg-white text-primary' :
                    index + 1 === currentStep ? 'bg-accent text-white' :
                    'bg-white/20 text-white/60'
                  }`}>
                    {index + 1 < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  {index < totalSteps - 1 && (
                    <div className={`w-8 h-0.5 mx-1 transition-colors ${
                      index + 1 < currentStep ? 'bg-white' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Consultation Scheduled!
                </h3>
                <p className="text-muted-foreground mb-6">
                  We'll contact you within 24 hours to confirm your consultation details and send a calendar invitation.
                </p>
                
                <div className="bg-muted-50 rounded-lg p-4 mb-6 text-left">
                  <h4 className="font-medium mb-2">Next Steps:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check your email for confirmation details</li>
                    <li>• Our team will call to confirm your preferred time</li>
                    <li>• Receive calendar invitation with meeting links</li>
                    <li>• Prepare any specific questions or materials</li>
                  </ul>
                </div>

                <Button onClick={resetAndClose} className="w-full">
                  Close
                </Button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Contact Information
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Let us know how to reach you for your consultation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="Enter your first name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your Company Ltd."
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Your Position</Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange('position', e.target.value)}
                          placeholder="e.g. Procurement Manager"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Consultation Preferences */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Consultation Preferences
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Choose your preferred consultation format and duration.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Label>Consultation Type *</Label>
                      <RadioGroup
                        value={formData.consultationType}
                        onValueChange={(value) => handleInputChange('consultationType', value)}
                      >
                        <div className="grid grid-cols-1 gap-3">
                          <Label htmlFor="phone-call" className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted-50 transition-colors">
                            <RadioGroupItem value="phone" id="phone-call" />
                            <div className="flex items-center space-x-3 flex-1">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <PhoneCall className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-medium">Phone Call</div>
                                <div className="text-sm text-muted-foreground">Traditional voice consultation</div>
                              </div>
                            </div>
                          </Label>

                          <Label htmlFor="video-call" className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted-50 transition-colors">
                            <RadioGroupItem value="video" id="video-call" />
                            <div className="flex items-center space-x-3 flex-1">
                              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                <Video className="w-5 h-5 text-accent" />
                              </div>
                              <div>
                                <div className="font-medium">Video Call</div>
                                <div className="text-sm text-muted-foreground">Face-to-face via video conference</div>
                              </div>
                              <Badge variant="secondary">Recommended</Badge>
                            </div>
                          </Label>

                          <Label htmlFor="in-person" className="flex items-center space-x-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted-50 transition-colors">
                            <RadioGroupItem value="in-person" id="in-person" />
                            <div className="flex items-center space-x-3 flex-1">
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <div className="font-medium">In-Person Meeting</div>
                                <div className="text-sm text-muted-foreground">Visit our facility or meet at your location</div>
                              </div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Preferred Duration *</Label>
                      <Select value={formData.preferredDuration} onValueChange={(value) => handleInputChange('preferredDuration', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select consultation duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes - Quick discussion</SelectItem>
                          <SelectItem value="60">1 hour - Standard consultation</SelectItem>
                          <SelectItem value="90">1.5 hours - Comprehensive review</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Timeline *</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this consultation?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent - Within 2-3 days</SelectItem>
                          <SelectItem value="this-week">This week - Within 5-7 days</SelectItem>
                          <SelectItem value="flexible">Flexible - Within 2 weeks</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Topics & Objectives */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Topics & Objectives
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Help us prepare the most relevant consultation for your needs.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Label>Primary Discussion Topics * (Select all that apply)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {consultationTopics.map((topic) => (
                          <Button
                            key={topic}
                            variant={formData.primaryTopics.includes(topic) ? "default" : "outline"}
                            size="sm"
                            className="justify-start text-left h-auto py-3 px-4"
                            onClick={() => handleTopicToggle(topic)}
                          >
                            {topic}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="objectives">Specific Objectives *</Label>
                      <Textarea
                        id="objectives"
                        value={formData.specificObjectives}
                        onChange={(e) => handleInputChange('specificObjectives', e.target.value)}
                        placeholder="What specific goals do you want to achieve through this consultation?"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="challenges">Current Challenges (Optional)</Label>
                      <Textarea
                        id="challenges"
                        value={formData.currentChallenges}
                        onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                        placeholder="Describe any current challenges or pain points we should address..."
                        rows={3}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Scheduling */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Schedule Your Consultation
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Select your preferred dates and times. We'll confirm availability.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label>Preferred Dates * (Select up to 3)</Label>
                        <p className="text-sm text-muted-foreground mb-3">
                          Choose your most preferred dates to increase scheduling flexibility.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {generateUpcomingDates().map((date) => (
                            <Button
                              key={date.value}
                              variant={formData.preferredDates.includes(date.value) ? "default" : "outline"}
                              size="sm"
                              className="justify-center"
                              onClick={() => handleDateToggle(date.value)}
                              disabled={!formData.preferredDates.includes(date.value) && formData.preferredDates.length >= 3}
                            >
                              {date.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>Preferred Time Slots * (Select multiple)</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={formData.preferredTimes.includes(time) ? "default" : "outline"}
                              size="sm"
                              className="justify-center"
                              onClick={() => handleTimeToggle(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timezone">Your Timezone *</Label>
                        <Select value={formData.timezone} onValueChange={(value) => handleInputChange('timezone', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            {timezones.map((timezone) => (
                              <SelectItem key={timezone} value={timezone}>
                                {timezone}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Review & Submit */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Review Your Consultation Request
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Please review your details before submitting.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Card className="p-4 border border-border">
                        <h4 className="font-medium mb-3">Contact Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
                          <p><span className="font-medium">Email:</span> {formData.email}</p>
                          {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}
                          <p><span className="font-medium">Company:</span> {formData.company}</p>
                          {formData.position && <p><span className="font-medium">Position:</span> {formData.position}</p>}
                        </div>
                      </Card>

                      <Card className="p-4 border border-border">
                        <h4 className="font-medium mb-3">Consultation Details</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Type:</span> {formData.consultationType === 'phone' ? 'Phone Call' : formData.consultationType === 'video' ? 'Video Call' : 'In-Person Meeting'}</p>
                          <p><span className="font-medium">Duration:</span> {formData.preferredDuration === '30' ? '30 minutes' : formData.preferredDuration === '60' ? '1 hour' : '1.5 hours'}</p>
                          <p><span className="font-medium">Timeline:</span> {formData.urgency === 'urgent' ? 'Urgent (2-3 days)' : formData.urgency === 'this-week' ? 'This week (5-7 days)' : 'Flexible (2 weeks)'}</p>
                          <p><span className="font-medium">Topics:</span> {formData.primaryTopics.join(', ')}</p>
                        </div>
                      </Card>

                      <Card className="p-4 border border-border">
                        <h4 className="font-medium mb-3">Scheduling Preferences</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Preferred Dates:</span></p>
                          <div className="flex flex-wrap gap-2">
                            {formData.preferredDates.map(date => (
                              <Badge key={date} variant="secondary">{new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</Badge>
                            ))}
                          </div>
                          <p><span className="font-medium">Preferred Times:</span></p>
                          <div className="flex flex-wrap gap-2">
                            {formData.preferredTimes.map(time => (
                              <Badge key={time} variant="secondary">{time}</Badge>
                            ))}
                          </div>
                          <p><span className="font-medium">Timezone:</span> {formData.timezone.split(' - ')[1] || formData.timezone}</p>
                        </div>
                      </Card>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                        placeholder="Any additional information or special requirements..."
                        rows={3}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>

                  <div className="text-sm text-muted-foreground">
                    Step {currentStep} of {totalSteps}
                  </div>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className="flex items-center gap-2"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !canProceed()}
                      className="flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Schedule Consultation
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}