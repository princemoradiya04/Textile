import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  X, 
  Package, 
  Building, 
  Truck, 
  FileText,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Factory,
  Palette,
  Ruler,
  Globe,
  Clock,
  Shield,
  Award,
  Download,
  Upload,
  Plus,
  Minus,
  AlertCircle,
  Info
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Product types and specifications
const productTypes = [
  {
    id: 'cotton',
    name: 'Cotton Yarns',
    description: 'Natural cotton fibers for various applications',
    counts: ['10s', '16s', '20s', '24s', '26s', '30s', '32s', '34s', '40s', '50s', '60s'],
    colors: '250+ colors available',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'wool',
    name: 'Wool Yarns',
    description: 'Premium wool fibers for luxury applications',
    counts: ['2/26', '2/30', '2/36', '2/44', '2/48', '2/60'],
    colors: '120+ colors available',
    image: 'https://images.unsplash.com/photo-1612198537895-0f4ac2e8a93b?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'synthetic',
    name: 'Synthetic Yarns',
    description: 'High-performance synthetic fibers',
    counts: ['75D', '100D', '150D', '200D', '300D', '600D'],
    colors: '180+ colors available',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'blended',
    name: 'Blended Yarns',
    description: 'Innovative fiber blends for enhanced performance',
    counts: ['20s', '30s', '40s', '50s', '60s'],
    colors: '200+ colors available',
    image: 'https://images.unsplash.com/photo-1604719311504-e2ecd0324e0e?w=400&h=300&fit=crop&crop=entropy'
  },
  {
    id: 'custom',
    name: 'Custom Solutions',
    description: 'Specialized yarns developed to your specifications',
    counts: ['Custom specifications'],
    colors: 'Custom color matching',
    image: 'https://images.unsplash.com/photo-1567696044516-fc0c1a8e41b8?w=400&h=300&fit=crop&crop=entropy'
  }
];

const industries = [
  'Fashion & Apparel',
  'Home Textiles',
  'Automotive',
  'Medical/Healthcare',
  'Industrial',
  'Aerospace',
  'Sports & Performance',
  'Other'
];

const deliveryOptions = [
  { id: 'standard', name: 'Standard Delivery', timeframe: '4-6 weeks', cost: 'Included' },
  { id: 'expedited', name: 'Expedited Delivery', timeframe: '2-3 weeks', cost: 'Additional cost' },
  { id: 'urgent', name: 'Urgent Delivery', timeframe: '1-2 weeks', cost: 'Premium cost' }
];

const certificationOptions = [
  'OEKO-TEX Standard 100',
  'GOTS (Global Organic Textile Standard)',
  'GRS (Global Recycled Standard)',
  'CRADLE TO CRADLE',
  'OCS (Organic Content Standard)',
  'RCS (Recycled Claim Standard)',
  'ISO 9001',
  'ISO 14001'
];

interface QuoteItem {
  id: string;
  productType: string;
  count: string;
  color: string;
  quantity: string;
  unit: 'kg' | 'lbs' | 'tons';
  notes: string;
}

export function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactName: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    industry: '',
    website: '',
    
    // Project Details
    projectName: '',
    projectDescription: '',
    applicationUse: '',
    targetMarket: '',
    estimatedVolume: '',
    budgetRange: '',
    
    // Product Requirements
    items: [] as QuoteItem[],
    
    // Quality & Certifications
    qualityRequirements: '',
    certifications: [] as string[],
    testingRequirements: '',
    
    // Delivery & Timeline
    deliveryOption: '',
    targetDeliveryDate: '',
    shippingAddress: '',
    specialInstructions: '',
    
    // Additional Information
    sustainabilityRequirements: '',
    marketingSupport: false,
    technicalSupport: false,
    samples: false,
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Add new quote item
  const addQuoteItem = () => {
    const newItem: QuoteItem = {
      id: `item-${Date.now()}`,
      productType: '',
      count: '',
      color: '',
      quantity: '',
      unit: 'kg',
      notes: ''
    };
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  // Remove quote item
  const removeQuoteItem = (id: string) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  // Update quote item
  const updateQuoteItem = (id: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  // Validate current step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1: // Company Information
        if (!formData.companyName) newErrors.companyName = 'Company name is required';
        if (!formData.contactName) newErrors.contactName = 'Contact name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        break;
      
      case 2: // Project Details
        if (!formData.projectName) newErrors.projectName = 'Project name is required';
        if (!formData.projectDescription) newErrors.projectDescription = 'Project description is required';
        if (!formData.applicationUse) newErrors.applicationUse = 'Application use is required';
        break;
      
      case 3: // Product Requirements
        if (formData.items.length === 0) {
          newErrors.items = 'At least one product item is required';
        } else {
          formData.items.forEach((item, index) => {
            if (!item.productType) newErrors[`item-${index}-productType`] = 'Product type is required';
            if (!item.quantity) newErrors[`item-${index}-quantity`] = 'Quantity is required';
          });
        }
        break;
      
      case 4: // Delivery & Timeline
        if (!formData.deliveryOption) newErrors.deliveryOption = 'Delivery option is required';
        if (!formData.targetDeliveryDate) newErrors.targetDeliveryDate = 'Target delivery date is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle step navigation
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setCurrentStep(5);
  };

  // Handle modal close
  const handleClose = () => {
    if (submitSuccess) {
      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        title: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        industry: '',
        website: '',
        projectName: '',
        projectDescription: '',
        applicationUse: '',
        targetMarket: '',
        estimatedVolume: '',
        budgetRange: '',
        items: [],
        qualityRequirements: '',
        certifications: [],
        testingRequirements: '',
        deliveryOption: '',
        targetDeliveryDate: '',
        shippingAddress: '',
        specialInstructions: '',
        sustainabilityRequirements: '',
        marketingSupport: false,
        technicalSupport: false,
        samples: false,
        additionalNotes: ''
      });
      setCurrentStep(1);
      setSubmitSuccess(false);
      setErrors({});
    }
    onClose();
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Request Quote
              </h2>
              <p className="text-sm text-muted-foreground">
                Get custom pricing for your textile requirements
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-muted/30">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: 'Company Info', icon: Building },
              { step: 2, label: 'Project Details', icon: Package },
              { step: 3, label: 'Products', icon: Factory },
              { step: 4, label: 'Delivery', icon: Truck },
              { step: 5, label: 'Complete', icon: CheckCircle }
            ].map(({ step, label, icon: Icon }, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center gap-2 ${
                  currentStep >= step ? 'text-accent' : 'text-muted-foreground'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                    currentStep >= step 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">{label}</span>
                </div>
                {index < 4 && (
                  <div className={`w-8 sm:w-16 h-px mx-2 sm:mx-4 ${
                    currentStep > step ? 'bg-accent' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="p-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Company Information
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tell us about your company and contact details
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                        placeholder="Your company name"
                        className={errors.companyName ? 'border-red-500' : ''}
                      />
                      {errors.companyName && (
                        <p className="text-sm text-red-500">{errors.companyName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        placeholder="Your full name"
                        className={errors.contactName ? 'border-red-500' : ''}
                      />
                      {errors.contactName && (
                        <p className="text-sm text-red-500">{errors.contactName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Your job title"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@company.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 (555) 123-4567"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
                      >
                        <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                          <SelectItem value="it">Italy</SelectItem>
                          <SelectItem value="es">Spain</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="cn">China</SelectItem>
                          <SelectItem value="jp">Japan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.country && (
                        <p className="text-sm text-red-500">{errors.country}</p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                        placeholder="Street address"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="City"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                      >
                        <SelectTrigger className={errors.industry ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map(industry => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.industry && (
                        <p className="text-sm text-red-500">{errors.industry}</p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                        placeholder="https://www.yourcompany.com"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Project Details
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Provide information about your project and requirements
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectName">Project Name *</Label>
                      <Input
                        id="projectName"
                        value={formData.projectName}
                        onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                        placeholder="Enter project name"
                        className={errors.projectName ? 'border-red-500' : ''}
                      />
                      {errors.projectName && (
                        <p className="text-sm text-red-500">{errors.projectName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description *</Label>
                      <Textarea
                        id="projectDescription"
                        value={formData.projectDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                        placeholder="Describe your project in detail..."
                        rows={4}
                        className={errors.projectDescription ? 'border-red-500' : ''}
                      />
                      {errors.projectDescription && (
                        <p className="text-sm text-red-500">{errors.projectDescription}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="applicationUse">Application/End Use *</Label>
                      <Input
                        id="applicationUse"
                        value={formData.applicationUse}
                        onChange={(e) => setFormData(prev => ({ ...prev, applicationUse: e.target.value }))}
                        placeholder="e.g., Fashion garments, home textiles, technical applications"
                        className={errors.applicationUse ? 'border-red-500' : ''}
                      />
                      {errors.applicationUse && (
                        <p className="text-sm text-red-500">{errors.applicationUse}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="targetMarket">Target Market</Label>
                        <Input
                          id="targetMarket"
                          value={formData.targetMarket}
                          onChange={(e) => setFormData(prev => ({ ...prev, targetMarket: e.target.value }))}
                          placeholder="e.g., Premium, Mid-market, Mass market"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="estimatedVolume">Estimated Annual Volume</Label>
                        <Input
                          id="estimatedVolume"
                          value={formData.estimatedVolume}
                          onChange={(e) => setFormData(prev => ({ ...prev, estimatedVolume: e.target.value }))}
                          placeholder="e.g., 10,000 kg, 50 tons"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range (Optional)</Label>
                      <Select
                        value={formData.budgetRange}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, budgetRange: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                          <SelectItem value="over-500k">Over $500,000</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Product Requirements */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Product Requirements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Specify the yarn products you need
                    </p>
                  </div>

                  {/* Product Type Selection */}
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium">Select Product Types</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {productTypes.map(product => (
                        <Card
                          key={product.id}
                          className="p-4 cursor-pointer border-2 transition-all hover:border-accent/50"
                          onClick={() => {
                            if (formData.items.length === 0 || !formData.items.some(item => item.productType === product.id)) {
                              addQuoteItem();
                              const newItemId = `item-${Date.now()}`;
                              setTimeout(() => {
                                updateQuoteItem(newItemId, 'productType', product.id);
                              }, 0);
                            }
                          }}
                        >
                          <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h5 className="font-medium mb-1">{product.name}</h5>
                          <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs">{product.colors}</Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Quote Items */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Quote Items</h4>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={addQuoteItem}
                        className="gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add Item
                      </Button>
                    </div>

                    {errors.items && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <p className="text-sm text-red-500">{errors.items}</p>
                      </div>
                    )}

                    {formData.items.map((item, index) => (
                      <Card key={item.id} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="font-medium">Item {index + 1}</h5>
                          {formData.items.length > 1 && (
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeQuoteItem(item.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <Label>Product Type *</Label>
                            <Select
                              value={item.productType}
                              onValueChange={(value) => updateQuoteItem(item.id, 'productType', value)}
                            >
                              <SelectTrigger className={errors[`item-${index}-productType`] ? 'border-red-500' : ''}>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                {productTypes.map(product => (
                                  <SelectItem key={product.id} value={product.id}>
                                    {product.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors[`item-${index}-productType`] && (
                              <p className="text-xs text-red-500">{errors[`item-${index}-productType`]}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label>Count/Specification</Label>
                            <Select
                              value={item.count}
                              onValueChange={(value) => updateQuoteItem(item.id, 'count', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select count" />
                              </SelectTrigger>
                              <SelectContent>
                                {item.productType && productTypes.find(p => p.id === item.productType)?.counts.map(count => (
                                  <SelectItem key={count} value={count}>
                                    {count}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Color/Style</Label>
                            <Input
                              value={item.color}
                              onChange={(e) => updateQuoteItem(item.id, 'color', e.target.value)}
                              placeholder="e.g., White, Navy, Custom"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Quantity *</Label>
                            <div className="flex gap-2">
                              <Input
                                value={item.quantity}
                                onChange={(e) => updateQuoteItem(item.id, 'quantity', e.target.value)}
                                placeholder="1000"
                                className={errors[`item-${index}-quantity`] ? 'border-red-500' : ''}
                              />
                              <Select
                                value={item.unit}
                                onValueChange={(value) => updateQuoteItem(item.id, 'unit', value as 'kg' | 'lbs' | 'tons')}
                              >
                                <SelectTrigger className="w-20">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="kg">kg</SelectItem>
                                  <SelectItem value="lbs">lbs</SelectItem>
                                  <SelectItem value="tons">tons</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            {errors[`item-${index}-quantity`] && (
                              <p className="text-xs text-red-500">{errors[`item-${index}-quantity`]}</p>
                            )}
                          </div>
                        </div>

                        <div className="mt-4">
                          <Label>Additional Notes</Label>
                          <Textarea
                            value={item.notes}
                            onChange={(e) => updateQuoteItem(item.id, 'notes', e.target.value)}
                            placeholder="Any specific requirements for this item..."
                            rows={2}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Quality & Certifications */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Quality & Certifications</h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="qualityRequirements">Quality Requirements</Label>
                      <Textarea
                        id="qualityRequirements"
                        value={formData.qualityRequirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, qualityRequirements: e.target.value }))}
                        placeholder="Describe any specific quality requirements..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Required Certifications</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {certificationOptions.map(cert => (
                          <div key={cert} className="flex items-center space-x-2">
                            <Checkbox
                              id={`cert-${cert}`}
                              checked={formData.certifications.includes(cert)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData(prev => ({
                                    ...prev,
                                    certifications: [...prev.certifications, cert]
                                  }));
                                } else {
                                  setFormData(prev => ({
                                    ...prev,
                                    certifications: prev.certifications.filter(c => c !== cert)
                                  }));
                                }
                              }}
                            />
                            <Label htmlFor={`cert-${cert}`} className="text-xs">
                              {cert}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="testingRequirements">Testing Requirements</Label>
                      <Textarea
                        id="testingRequirements"
                        value={formData.testingRequirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, testingRequirements: e.target.value }))}
                        placeholder="Any specific testing requirements..."
                        rows={2}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Delivery & Timeline */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Delivery & Timeline
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Specify your delivery preferences and timeline
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Delivery Options */}
                    <div className="space-y-4">
                      <Label>Delivery Option *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {deliveryOptions.map(option => (
                          <Card
                            key={option.id}
                            className={`p-4 cursor-pointer border-2 transition-all ${
                              formData.deliveryOption === option.id
                                ? 'border-accent bg-accent/5'
                                : 'border-border hover:border-accent/50'
                            }`}
                            onClick={() => setFormData(prev => ({ ...prev, deliveryOption: option.id }))}
                          >
                            <div className="text-center">
                              <h5 className="font-medium mb-2">{option.name}</h5>
                              <p className="text-sm text-muted-foreground mb-1">{option.timeframe}</p>
                              <Badge variant="outline" className="text-xs">
                                {option.cost}
                              </Badge>
                            </div>
                          </Card>
                        ))}
                      </div>
                      {errors.deliveryOption && (
                        <p className="text-sm text-red-500">{errors.deliveryOption}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="targetDeliveryDate">Target Delivery Date *</Label>
                        <Input
                          id="targetDeliveryDate"
                          type="date"
                          value={formData.targetDeliveryDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, targetDeliveryDate: e.target.value }))}
                          className={errors.targetDeliveryDate ? 'border-red-500' : ''}
                        />
                        {errors.targetDeliveryDate && (
                          <p className="text-sm text-red-500">{errors.targetDeliveryDate}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shippingAddress">Shipping Address</Label>
                        <Textarea
                          id="shippingAddress"
                          value={formData.shippingAddress}
                          onChange={(e) => setFormData(prev => ({ ...prev, shippingAddress: e.target.value }))}
                          placeholder="If different from company address..."
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialInstructions">Special Instructions</Label>
                      <Textarea
                        id="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={(e) => setFormData(prev => ({ ...prev, specialInstructions: e.target.value }))}
                        placeholder="Any special delivery instructions or requirements..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sustainabilityRequirements">Sustainability Requirements</Label>
                      <Textarea
                        id="sustainabilityRequirements"
                        value={formData.sustainabilityRequirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, sustainabilityRequirements: e.target.value }))}
                        placeholder="Any specific sustainability or environmental requirements..."
                        rows={3}
                      />
                    </div>

                    {/* Additional Services */}
                    <div className="space-y-4">
                      <Label>Additional Services</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="samples"
                            checked={formData.samples}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, samples: checked as boolean }))}
                          />
                          <Label htmlFor="samples">Request samples before production</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="technicalSupport"
                            checked={formData.technicalSupport}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, technicalSupport: checked as boolean }))}
                          />
                          <Label htmlFor="technicalSupport">Technical consultation support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="marketingSupport"
                            checked={formData.marketingSupport}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingSupport: checked as boolean }))}
                          />
                          <Label htmlFor="marketingSupport">Marketing and branding support</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                        placeholder="Any additional information or special requests..."
                        rows={3}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Complete */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Quote Request Submitted!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your quote request. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">What happens next?</h4>
                    <div className="space-y-3 text-sm text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs text-white font-medium">
                          1
                        </div>
                        <span>Our technical team will review your requirements</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs text-white font-medium">
                          2
                        </div>
                        <span>We'll prepare a detailed quote with pricing and specifications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs text-white font-medium">
                          3
                        </div>
                        <span>You'll receive your quote via email within 24 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs text-white font-medium">
                          4
                        </div>
                        <span>Our team will follow up to discuss next steps</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={handleClose} className="gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Close
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Summary
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        {currentStep < 5 && (
          <div className="flex items-center justify-between p-6 border-t border-border bg-muted/20">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex gap-2">
              <Button variant="ghost" onClick={handleClose}>
                Cancel
              </Button>
              
              {currentStep < 4 ? (
                <Button onClick={nextStep} className="gap-2">
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      Submit Request
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}