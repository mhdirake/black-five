"use client";

import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import PublishedWithChangesOutlinedIcon from "@mui/icons-material/PublishedWithChangesOutlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import { Button, Chip, Grid2 } from "@mui/material";

import { useLocalization } from "@/context/LocalizationProvider";

import {
  ContentStack,
  FeatureCard,
  FeatureDescription,
  FeatureGrid,
  FeatureIcon,
  FeatureTitle,
  SectionDescription,
  SectionRoot,
  SectionTitle,
  TicketAction,
  TicketCode,
  TicketMetaGrid,
  TicketMetaItem,
  TicketMetaLabel,
  TicketMetaValue,
  TicketPanel,
  TicketPanelHeader,
  TicketProduct,
  TicketStatus,
  TicketVisual,
  TicketVisualContent,
  TicketsContainer,
} from "./style";

const featureIcons = [
  <ConfirmationNumberOutlinedIcon key="ticket" fontSize="small" />,
  <PublishedWithChangesOutlinedIcon key="transfer" fontSize="small" />,
  <TravelExploreOutlinedIcon key="track" fontSize="small" />,
];

function TicketsSection() {
  const { dictionary } = useLocalization();
  const tickets = dictionary.tickets;
  const panel = tickets.panel;

  return (
    <SectionRoot id="tickets">
      <TicketsContainer maxWidth="lg">
        <Grid2 container spacing={{ xs: 4, md: 5 }} alignItems="center">
          <Grid2 size={{ xs: 12, md: 7 }}>
            <ContentStack>
              <SectionTitle component="h2">{tickets.title}</SectionTitle>
              <SectionDescription>{tickets.description}</SectionDescription>

              <FeatureGrid container spacing={2}>
                {tickets.features.map((feature, index) => (
                  <Grid2 key={feature.title} size={{ xs: 12, sm: 4 }}>
                    <FeatureCard>
                      <FeatureIcon>{featureIcons[index]}</FeatureIcon>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureCard>
                  </Grid2>
                ))}
              </FeatureGrid>
            </ContentStack>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 5 }}>
            <TicketPanel>
              <TicketPanelHeader>
                <TicketStatus>{panel.status}</TicketStatus>
                <Chip color="secondary" variant="outlined" size="small" label={panel.badge} />
              </TicketPanelHeader>

              <TicketVisual>
                <TicketVisualContent>
                  <TicketProduct>{panel.product}</TicketProduct>
                  <TicketCode>BF-2048-AX</TicketCode>
                </TicketVisualContent>
              </TicketVisual>

              <TicketMetaGrid container spacing={1.5}>
                <Grid2 size={6}>
                  <TicketMetaItem>
                    <TicketMetaLabel>{panel.marketLabel}</TicketMetaLabel>
                    <TicketMetaValue>{panel.marketValue}</TicketMetaValue>
                  </TicketMetaItem>
                </Grid2>
                <Grid2 size={6}>
                  <TicketMetaItem>
                    <TicketMetaLabel>{panel.ownerLabel}</TicketMetaLabel>
                    <TicketMetaValue>{panel.ownerValue}</TicketMetaValue>
                  </TicketMetaItem>
                </Grid2>
                <Grid2 size={12}>
                  <TicketMetaItem>
                    <TicketMetaLabel>{panel.validityLabel}</TicketMetaLabel>
                    <TicketMetaValue>{panel.validityValue}</TicketMetaValue>
                  </TicketMetaItem>
                </Grid2>
              </TicketMetaGrid>

              <TicketAction>
                <Button fullWidth color="secondary" href="#tickets-market">
                  {tickets.action}
                </Button>
              </TicketAction>
            </TicketPanel>
          </Grid2>
        </Grid2>
      </TicketsContainer>
    </SectionRoot>
  );
}

export default TicketsSection;
