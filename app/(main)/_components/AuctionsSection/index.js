"use client";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Button, IconButton } from "@mui/material";
import { useLocalization } from "@/context/LocalizationProvider";
import { useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AuctionCard from "./_components/AuctionCard";
import {
  AuctionsContainer,
  SectionActions,
  SectionDescription,
  SectionHeader,
  SectionRoot,
  SectionTitle,
  SliderControls,
  SliderShell,
  TabsWrapper,
} from "./style";

function AuctionsSection() {
  const [activeTab, setActiveTab] = useState("active");
  const { dictionary, direction } = useLocalization();
  const auctions = dictionary.auctions.items;
  const tabs = dictionary.auctions.tabs;

  const visibleAuctions = useMemo(
    () => auctions.filter((auction) => auction.status === activeTab),
    [activeTab]
  );

  return (
    <SectionRoot id="auctions">
      <AuctionsContainer maxWidth="lg">
        <SectionHeader>
          <div>
            <SectionTitle component="h2">{dictionary.auctions.title}</SectionTitle>
            <SectionDescription>
              {dictionary.auctions.description}
            </SectionDescription>
          </div>

          <SectionActions>
            <TabsWrapper>
              {tabs.map((tab) => (
                <Button
                  key={tab.value}
                  color={activeTab === tab.value ? "secondary" : "info"}
                  variant={activeTab === tab.value ? "contained" : "text"}
                  size="small"
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.label}
                </Button>
              ))}
            </TabsWrapper>

            <SliderControls>
              <IconButton className="auction-slider-prev" aria-label={dictionary.common.previous}>
                {direction === "rtl" ? <ArrowForwardRoundedIcon fontSize="small" color="info" /> : <ArrowBackRoundedIcon fontSize="small" color="info" />}
              </IconButton>
              <IconButton className="auction-slider-next" aria-label={dictionary.common.next}>
                {direction === "rtl" ? <ArrowBackRoundedIcon fontSize="small" color="info" /> : <ArrowForwardRoundedIcon fontSize="small" color="info" />}
              </IconButton>
            </SliderControls>
          </SectionActions>
        </SectionHeader>

        <SliderShell>
          <Swiper
            key={`${activeTab}-${direction}`}
            dir={direction}
            modules={[Navigation]}
            navigation={{
              prevEl: ".auction-slider-prev",
              nextEl: ".auction-slider-next",
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              700: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
            }}
          >
            {visibleAuctions.map((auction) => (
              <SwiperSlide key={auction.id}>
                <AuctionCard
                  auction={auction}
                  labels={{
                    ...dictionary.auctions.card,
                    live: dictionary.common.live,
                    expired: dictionary.common.expired,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderShell>
      </AuctionsContainer>
    </SectionRoot>
  );
}

export default AuctionsSection;
