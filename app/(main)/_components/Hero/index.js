"use client";

import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import { Button, Chip, Grid2, Typography } from "@mui/material";
import KeycloakSignInButton from "@/components/KeycloakSignInButton";
import { useLocalization } from "@/context/LocalizationProvider";
import Image from "next/image";

import {
  AuctionInfoCard,
  AuctionInfoGrid,
  AuctionInfoLabel,
  AuctionInfoValue,
  AuctionPreviewCard,
  AuctionPreviewDescription,
  AuctionPreviewHeader,
  AuctionPreviewHeading,
  AuctionPreviewMedia,
  AuctionPreviewTitle,
  HeroActions,
  HeroBadge,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroGrid,
  HeroSection,
  HeroStatCard,
  HeroStatLabel,
  HeroStatsGrid,
  HeroStatValue,
  HeroTitle,
  HeroTitleAccent,
  HeroVisual,
} from "./style";

function Hero() {
  const { dictionary } = useLocalization();
  const hero = dictionary.hero;

  return (
    <HeroSection>
      <HeroContainer maxWidth="lg">
        <HeroGrid container spacing={{ xs: 3, md: 2 }}>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <HeroContent gap={2.5}>
              <HeroBadge>
                <GavelRoundedIcon fontSize="small" />
                <Typography variant="subtitle2">
                  {hero.badge}
                </Typography>
              </HeroBadge>

              <HeroTitle component="h4">
                {hero.titleBefore}{" "}
                <HeroTitleAccent component="span">
                  {hero.titleAccent}
                </HeroTitleAccent>{" "}
                {hero.titleAfter}
              </HeroTitle>

              <HeroDescription>
                {hero.description}
              </HeroDescription>

              <HeroActions>
                <KeycloakSignInButton size={"small"} color="secondary">
                  {hero.primaryAction}
                </KeycloakSignInButton>
                <Button size={"small"} color="info" variant="outlined" href="#auctions">
                  {hero.secondaryAction}
                </Button>
              </HeroActions>

              <HeroStatsGrid container spacing={1.5}>
                {hero.stats.map((item) => (
                  <Grid2 key={item.label} size={{ xs: 12, sm: 4 }}>
                    <HeroStatCard>
                      <HeroStatValue>{item.value}</HeroStatValue>
                      <HeroStatLabel>{item.label}</HeroStatLabel>
                    </HeroStatCard>
                  </Grid2>
                ))}
              </HeroStatsGrid>
            </HeroContent>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <HeroVisual>
              <AuctionPreviewCard>
                <AuctionPreviewHeader>
                  <AuctionPreviewHeading>{hero.preview.heading}</AuctionPreviewHeading>
                  <Chip variant="outlined" color="secondary" label={dictionary.common.live} size="small" />
                </AuctionPreviewHeader>

                <AuctionPreviewMedia>
                  <Image
                    src="/images/template/csm_macbook_neo.webp"
                    alt={hero.preview.alt}
                    width={500}
                    height={500}
                  />
                </AuctionPreviewMedia>

                <AuctionPreviewTitle>
                  {hero.preview.title}
                </AuctionPreviewTitle>
                <AuctionPreviewDescription>
                  {hero.preview.description}
                </AuctionPreviewDescription>

                <AuctionInfoGrid container spacing={1.5}>
                  {hero.preview.info.map((item) => (
                    <Grid2 key={item.label} size={6}>
                      <AuctionInfoCard>
                        <AuctionInfoLabel>{item.label}</AuctionInfoLabel>
                        <AuctionInfoValue>{item.value}</AuctionInfoValue>
                      </AuctionInfoCard>
                    </Grid2>
                  ))}
                </AuctionInfoGrid>
              </AuctionPreviewCard>
            </HeroVisual>
          </Grid2>
        </HeroGrid>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
