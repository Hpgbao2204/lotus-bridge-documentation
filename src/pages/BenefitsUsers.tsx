import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Wallet,
  Globe,
  Zap,
  ArrowRight,
  ArrowLeft,
  Heart,
  Target,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BenefitsUsers = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleTokenHover = (event: MouseEvent) => {
      const tokenCard = event.currentTarget as HTMLElement;
      const img = tokenCard.querySelector("img");

      if (img) {
        // Remove any existing animation
        img.style.animation = "none";
        // Force reflow
        void img.offsetHeight;
        // Add the animation
        img.style.animation = "tokenIconSpin 0.8s ease-in-out";

        // Clean up after animation completes
        setTimeout(() => {
          img.style.animation = "";
        }, 800);
      }
    };

    // Add event listeners to all token cards
    const tokenCards = document.querySelectorAll(".token-icon-hover");
    tokenCards.forEach((card) => {
      card.addEventListener("mouseenter", handleTokenHover);
    });

    // Cleanup
    return () => {
      tokenCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleTokenHover);
      });
    };
  }, []);

  const userBenefits = [
    {
      title: t("pages.benefitsUsers.simplifiedAccess"),
      description: t("pages.benefitsUsers.simplifiedDescription"),
      icon: Globe,
      features: [
        t("pages.benefitsUsers.unifiedPortfolio"),
        t("pages.benefitsUsers.simplifiedRouting"),
        t("pages.benefitsUsers.reducedComplexity"),
        t("pages.benefitsUsers.oneClickAccess"),
      ],
    },
    {
      title: t("pages.benefitsUsers.localFirst"),
      description: t("pages.benefitsUsers.localDescription"),
      icon: Heart,
      features: [
        t("pages.benefitsUsers.vietnameseInterface"),
        t("pages.benefitsUsers.localPayment"),
        t("pages.benefitsUsers.nativeTokenSupport"),
        t("pages.benefitsUsers.culturalDesign"),
      ],
    },
    {
      title: t("pages.benefitsUsers.flexibleRouting"),
      description: t("pages.benefitsUsers.flexibleDescription"),
      icon: Target,
      features: [
        t("pages.benefitsUsers.optimalRouting"),
        t("pages.benefitsUsers.gasOptimization"),
        t("pages.benefitsUsers.crossChainTransfers"),
        t("pages.benefitsUsers.multiWalletSupport"),
      ],
    },
  ];

  const scenarioCards = [
    {
      title: t("pages.benefitsUsers.scenarios.gaming.title"),
      scenario: t("pages.benefitsUsers.scenarios.gaming.scenario"),
      benefit: t("pages.benefitsUsers.scenarios.gaming.benefit"),
      tokens: ["AXS", "SLP", "RON"],
    },
    {
      title: t("pages.benefitsUsers.scenarios.defi.title"),
      scenario: t("pages.benefitsUsers.scenarios.defi.scenario"),
      benefit: t("pages.benefitsUsers.scenarios.defi.benefit"),
      tokens: ["VNDC", "VNST", "ETH"],
    },
    {
      title: t("pages.benefitsUsers.scenarios.trader.title"),
      scenario: t("pages.benefitsUsers.scenarios.trader.scenario"),
      benefit: t("pages.benefitsUsers.scenarios.trader.benefit"),
      tokens: ["KAI", "C98", "KNC"],
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Header />
          <div className="relative">
            <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />

            {/* Hero Section */}
            <section className="py-12 px-6 bg-gradient-to-br from-background to-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">
                    {t("pages.benefitsUsers.hero.badge")}
                  </Badge>
                  <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {t("pages.benefitsUsers.hero.title")}
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {t("pages.benefitsUsers.hero.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Core Benefits */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="grid gap-8">
                  {userBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <Card key={index} className="relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${
                            index % 2 === 0
                              ? "from-primary to-accent"
                              : "from-accent to-primary"
                          }`}
                        />
                        <CardHeader className="pl-8">
                          <div className="flex items-center gap-4 mb-2">
                            <div
                              className={`p-3 rounded-lg ${
                                index % 2 === 0
                                  ? "bg-primary/10"
                                  : "bg-accent/10"
                              }`}
                            >
                              <IconComponent
                                className={`h-6 w-6 ${
                                  index % 2 === 0
                                    ? "text-primary"
                                    : "text-accent"
                                }`}
                              />
                            </div>
                            <CardTitle className="text-2xl">
                              {benefit.title}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {benefit.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pl-8">
                          <div className="grid md:grid-cols-2 gap-4">
                            {benefit.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-sm font-medium">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* User Scenarios */}
            <section className="py-10 px-6 bg-muted/20">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🇻🇳 {t("pages.benefitsUsers.scenarios.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.benefitsUsers.scenarios.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {scenarioCards.map((scenario, index) => (
                    <Card key={index} className="relative overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {scenario.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {scenario.scenario}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <h4 className="font-semibold text-green-600 mb-2">
                            ✅ {t("pages.benefitsUsers.scenarios.benefitLabel")}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {scenario.benefit}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            🪙 {t("pages.benefitsUsers.scenarios.tokensLabel")}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {scenario.tokens.map((token, tokenIndex) => (
                              <Badge
                                key={tokenIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {token}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Vietnamese Token Showcase */}
            <section className="py-12 px-6">
              <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">
                    🌸 {t("pages.benefitsUsers.tokenIntegration.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("pages.benefitsUsers.tokenIntegration.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      token: "AXS",
                      name: "Axie Infinity",
                      chain: "Ronin",
                      image:
                        "https://coin-images.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1696512817",
                    },
                    {
                      token: "SLP",
                      name: "Smooth Love Potion",
                      chain: "Ronin",
                      image:
                        "https://coin-images.coingecko.com/coins/images/10366/large/SLP.png?1696510368",
                    },
                    {
                      token: "VNDC",
                      name: "VND Coin",
                      chain: "Multiple",
                      image:
                        "https://assets.coingecko.com/coins/images/9670/standard/vndc-gold-coin.png?1696509740",
                    },
                    {
                      token: "VNST",
                      name: "Vietnam Stable Token",
                      chain: "Multiple",
                      image:
                        "https://vnst.io/_next/image?url=%2Fassets%2Fimages%2Fcryptos%2Fvnst.png&w=96&q=75",
                    },
                    {
                      token: "KAI",
                      name: "KardiaChain",
                      chain: "Kardia",
                      image:
                        "https://assets.coingecko.com/coins/images/7942/standard/kai.png?1696508172",
                    },
                    {
                      token: "C98",
                      name: "Coin98",
                      chain: "Multiple",
                      image:
                        "https://assets.coingecko.com/coins/images/17117/standard/logo.png?1696516677",
                    },
                    {
                      token: "KNC",
                      name: "Kyber Network",
                      chain: "Ethereum",
                      image:
                        "https://assets.coingecko.com/coins/images/14899/standard/RwdVsGcw_400x400.jpg?1696514562",
                    },
                    {
                      token: "SIPHER",
                      name: "Sipher",
                      chain: "Ethereum",
                      image:
                        "https://assets.coingecko.com/coins/images/21070/standard/SipherToken.png?1696520453",
                    },
                  ].map((token, index) => (
                    <Card key={index} className="text-center token-icon-hover">
                      <CardHeader>
                        <img
                          src={token.image}
                          alt={token.token}
                          className="w-12 h-12 mx-auto mb-2 rounded-full"
                        />
                        <CardTitle className="text-lg">{token.token}</CardTitle>
                        <CardDescription>{token.name}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="outline" className="text-xs">
                          {token.chain}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section className="py-8 px-6 border-t">
              <div className="container mx-auto max-w-5xl">
                <div className="flex justify-between items-center">
                  <Link to="/ecosystem-benefits">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      {t("pages.benefitsUsers.navigation.backToEcosystem")}
                    </Button>
                  </Link>
                  <Link to="/ecosystem-benefits">
                    <Button variant="outline">
                      {t("pages.benefitsUsers.navigation.backToOverview")}
                    </Button>
                  </Link>
                  <Link to="/benefits-developers">
                    <Button className="flex items-center gap-2">
                      {t("pages.benefitsUsers.navigation.continueToBuilders")}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BenefitsUsers;
