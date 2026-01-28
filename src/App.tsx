import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ComponentLayout } from "./components/layout/ComponentLayout";
import { BlockLayout } from "./components/layout/BlockLayout";
import ComponentsIndex from "./pages/components/ComponentsIndex";
import CategoryIndex from "./pages/components/CategoryIndex";

// Form Components
import TextInputShowcase from "./pages/components/forms/TextInputShowcase";
import TextareaShowcase from "./pages/components/forms/TextareaShowcase";
import SelectShowcase from "./pages/components/forms/SelectShowcase";
import CheckboxShowcase from "./pages/components/forms/CheckboxShowcase";
import RadioGroupShowcase from "./pages/components/forms/RadioGroupShowcase";
import SwitchShowcase from "./pages/components/forms/SwitchShowcase";
import DatePickerShowcase from "./pages/components/forms/DatePickerShowcase";
import FileUploadShowcase from "./pages/components/forms/FileUploadShowcase";
import SliderShowcase from "./pages/components/forms/SliderShowcase";
import OTPInputShowcase from "./pages/components/forms/OTPInputShowcase";

// Data Display Components
import CardShowcase from "./pages/components/data-display/CardShowcase";
import TableShowcase from "./pages/components/data-display/TableShowcase";
import DataGridShowcase from "./pages/components/data-display/DataGridShowcase";
import StatsCardShowcase from "./pages/components/data-display/StatsCardShowcase";
import BadgeShowcase from "./pages/components/data-display/BadgeShowcase";
import AvatarShowcase from "./pages/components/data-display/AvatarShowcase";
import ProgressShowcase from "./pages/components/data-display/ProgressShowcase";
import ChartsShowcase from "./pages/components/data-display/ChartsShowcase";

// Navigation Components
import NavbarShowcase from "./pages/components/navigation/NavbarShowcase";
import SidebarShowcase from "./pages/components/navigation/SidebarShowcase";
import TabsShowcase from "./pages/components/navigation/TabsShowcase";
import BreadcrumbsShowcase from "./pages/components/navigation/BreadcrumbsShowcase";
import PaginationShowcase from "./pages/components/navigation/PaginationShowcase";
import StepsShowcase from "./pages/components/navigation/StepsShowcase";
import NavMenuShowcase from "./pages/components/navigation/NavMenuShowcase";

// Feedback Components
import ToastShowcase from "./pages/components/feedback/ToastShowcase";
import AlertShowcase from "./pages/components/feedback/AlertShowcase";
import DialogShowcase from "./pages/components/feedback/DialogShowcase";
import SheetShowcase from "./pages/components/feedback/SheetShowcase";
import TooltipShowcase from "./pages/components/feedback/TooltipShowcase";
import PopoverShowcase from "./pages/components/feedback/PopoverShowcase";
import SpinnerShowcase from "./pages/components/feedback/SpinnerShowcase";
import SkeletonShowcase from "./pages/components/feedback/SkeletonShowcase";
import AlertDialogShowcase from "./pages/components/feedback/AlertDialogShowcase";
import HoverCardShowcase from "./pages/components/feedback/HoverCardShowcase";

// Blocks
import BlocksIndex from "./pages/blocks/BlocksIndex";
import BlockCategoryIndex from "./pages/blocks/BlockCategoryIndex";

// Marketing Blocks
import HeroBlockShowcase from "./pages/blocks/marketing/HeroBlockShowcase";
import FeaturesBlockShowcase from "./pages/blocks/marketing/FeaturesBlockShowcase";
import PricingBlockShowcase from "./pages/blocks/marketing/PricingBlockShowcase";
import TestimonialsBlockShowcase from "./pages/blocks/marketing/TestimonialsBlockShowcase";
import SocialProofBlockShowcase from "./pages/blocks/marketing/SocialProofBlockShowcase";
import CTABlockShowcase from "./pages/blocks/marketing/CTABlockShowcase";
import LogoCloudBlockShowcase from "./pages/blocks/marketing/LogoCloudBlockShowcase";
import FAQBlockShowcase from "./pages/blocks/marketing/FAQBlockShowcase";

// Page Blocks
import AboutBlockShowcase from "./pages/blocks/pages/AboutBlockShowcase";
import ContactBlockShowcase from "./pages/blocks/pages/ContactBlockShowcase";
import PortfolioBlockShowcase from "./pages/blocks/pages/PortfolioBlockShowcase";
import TeamBlockShowcase from "./pages/blocks/pages/TeamBlockShowcase";
import GalleryBlockShowcase from "./pages/blocks/pages/GalleryBlockShowcase";

// Auth Blocks
import LoginBlockShowcase from "./pages/blocks/auth/LoginBlockShowcase";
import RegisterBlockShowcase from "./pages/blocks/auth/RegisterBlockShowcase";
import ForgotPasswordBlockShowcase from "./pages/blocks/auth/ForgotPasswordBlockShowcase";
import ResetPasswordBlockShowcase from "./pages/blocks/auth/ResetPasswordBlockShowcase";
import VerifyEmailBlockShowcase from "./pages/blocks/auth/VerifyEmailBlockShowcase";
import TwoFactorBlockShowcase from "./pages/blocks/auth/TwoFactorBlockShowcase";

// Utility Blocks
import NavbarBlockShowcase from "./pages/blocks/utilities/NavbarBlockShowcase";
import FooterBlockShowcase from "./pages/blocks/utilities/FooterBlockShowcase";
import ErrorBlockShowcase from "./pages/blocks/utilities/ErrorBlockShowcase";
import CookiesBlockShowcase from "./pages/blocks/utilities/CookiesBlockShowcase";
import IntegrationBlockShowcase from "./pages/blocks/utilities/IntegrationBlockShowcase";
import CompareBlockShowcase from "./pages/blocks/utilities/CompareBlockShowcase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Component Routes */}
            <Route path="/components" element={<ComponentLayout />}>
              <Route index element={<ComponentsIndex />} />
              <Route path=":category" element={<CategoryIndex />} />
              
              {/* Form Components */}
              <Route path="forms/text-input" element={<TextInputShowcase />} />
              <Route path="forms/textarea" element={<TextareaShowcase />} />
              <Route path="forms/select" element={<SelectShowcase />} />
              <Route path="forms/checkbox" element={<CheckboxShowcase />} />
              <Route path="forms/radio-group" element={<RadioGroupShowcase />} />
              <Route path="forms/switch" element={<SwitchShowcase />} />
              <Route path="forms/date-picker" element={<DatePickerShowcase />} />
              <Route path="forms/file-upload" element={<FileUploadShowcase />} />
              <Route path="forms/slider" element={<SliderShowcase />} />
              <Route path="forms/otp-input" element={<OTPInputShowcase />} />
              
              {/* Data Display Components */}
              <Route path="data-display/card" element={<CardShowcase />} />
              <Route path="data-display/table" element={<TableShowcase />} />
              <Route path="data-display/data-grid" element={<DataGridShowcase />} />
              <Route path="data-display/stats-card" element={<StatsCardShowcase />} />
              <Route path="data-display/badge" element={<BadgeShowcase />} />
              <Route path="data-display/avatar" element={<AvatarShowcase />} />
              <Route path="data-display/progress" element={<ProgressShowcase />} />
              <Route path="data-display/charts" element={<ChartsShowcase />} />
              
              {/* Navigation Components */}
              <Route path="navigation/navbar" element={<NavbarShowcase />} />
              <Route path="navigation/sidebar" element={<SidebarShowcase />} />
              <Route path="navigation/tabs" element={<TabsShowcase />} />
              <Route path="navigation/breadcrumbs" element={<BreadcrumbsShowcase />} />
              <Route path="navigation/pagination" element={<PaginationShowcase />} />
              <Route path="navigation/steps" element={<StepsShowcase />} />
              <Route path="navigation/nav-menu" element={<NavMenuShowcase />} />
              
              {/* Feedback Components */}
              <Route path="feedback/toast" element={<ToastShowcase />} />
              <Route path="feedback/alert" element={<AlertShowcase />} />
              <Route path="feedback/dialog" element={<DialogShowcase />} />
              <Route path="feedback/sheet" element={<SheetShowcase />} />
              <Route path="feedback/tooltip" element={<TooltipShowcase />} />
              <Route path="feedback/popover" element={<PopoverShowcase />} />
              <Route path="feedback/spinner" element={<SpinnerShowcase />} />
              <Route path="feedback/skeleton" element={<SkeletonShowcase />} />
              <Route path="feedback/alert-dialog" element={<AlertDialogShowcase />} />
              <Route path="feedback/hover-card" element={<HoverCardShowcase />} />
            </Route>

            {/* Block Routes */}
            <Route path="/blocks" element={<BlockLayout />}>
              <Route index element={<BlocksIndex />} />
              <Route path=":category" element={<BlockCategoryIndex />} />
              
              {/* Marketing Blocks */}
              <Route path="marketing/hero" element={<HeroBlockShowcase />} />
              <Route path="marketing/features" element={<FeaturesBlockShowcase />} />
              <Route path="marketing/pricing" element={<PricingBlockShowcase />} />
              <Route path="marketing/testimonials" element={<TestimonialsBlockShowcase />} />
              <Route path="marketing/social-proof" element={<SocialProofBlockShowcase />} />
              <Route path="marketing/cta" element={<CTABlockShowcase />} />
              <Route path="marketing/logo-cloud" element={<LogoCloudBlockShowcase />} />
              <Route path="marketing/faq" element={<FAQBlockShowcase />} />
              
              {/* Page Blocks */}
              <Route path="pages/about" element={<AboutBlockShowcase />} />
              <Route path="pages/contact" element={<ContactBlockShowcase />} />
              <Route path="pages/portfolio" element={<PortfolioBlockShowcase />} />
              <Route path="pages/team" element={<TeamBlockShowcase />} />
              <Route path="pages/gallery" element={<GalleryBlockShowcase />} />
              
              {/* Auth Blocks */}
              <Route path="auth/login" element={<LoginBlockShowcase />} />
              <Route path="auth/register" element={<RegisterBlockShowcase />} />
              <Route path="auth/forgot-password" element={<ForgotPasswordBlockShowcase />} />
              <Route path="auth/reset-password" element={<ResetPasswordBlockShowcase />} />
              <Route path="auth/verify-email" element={<VerifyEmailBlockShowcase />} />
              <Route path="auth/two-factor" element={<TwoFactorBlockShowcase />} />
              
              {/* Utility Blocks */}
              <Route path="utilities/navbar" element={<NavbarBlockShowcase />} />
              <Route path="utilities/footer" element={<FooterBlockShowcase />} />
              <Route path="utilities/error" element={<ErrorBlockShowcase />} />
              <Route path="utilities/cookies" element={<CookiesBlockShowcase />} />
              <Route path="utilities/integration" element={<IntegrationBlockShowcase />} />
              <Route path="utilities/compare" element={<CompareBlockShowcase />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
