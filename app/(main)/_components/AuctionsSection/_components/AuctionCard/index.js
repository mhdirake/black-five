import Image from "next/image";
import { Button, Chip } from "@mui/material";

import {
  CardAction,
  CardDescription,
  CardHeader,
  CardMedia,
  CardMetaGrid,
  CardMetaItem,
  CardMetaLabel,
  CardMetaValue,
  CardRoot,
  CardTitle,
} from "./style";

function AuctionCard({ auction, labels }) {
  const isActive = auction.status === "active";

  return (
    <CardRoot>
      <CardMedia>
        <Image src={auction.image} alt={auction.title} fill sizes="(max-width: 900px) 100vw, 360px" />
      </CardMedia>

      <CardHeader>
        <CardTitle>{auction.title}</CardTitle>
        <Chip
          color={isActive ? "secondary" : "error"}
          label={isActive ? labels.live : labels.expired}
          size="small"
          variant={"outlined"}
        />
      </CardHeader>

      <CardDescription>{auction.description}</CardDescription>

      <CardMetaGrid>
        <CardMetaItem>
          <CardMetaLabel>{isActive ? labels.activeTime : labels.expiredTime}</CardMetaLabel>
          <CardMetaValue>{auction.time}</CardMetaValue>
        </CardMetaItem>
        <CardMetaItem>
          <CardMetaLabel>{isActive ? labels.activePrice : labels.expiredPrice}</CardMetaLabel>
          <CardMetaValue>{auction.price}</CardMetaValue>
        </CardMetaItem>
        <CardMetaItem>
          <CardMetaLabel>{labels.tickets}</CardMetaLabel>
          <CardMetaValue>{auction.tickets}</CardMetaValue>
        </CardMetaItem>
        <CardMetaItem>
          <CardMetaLabel>{labels.participants}</CardMetaLabel>
          <CardMetaValue>{auction.participants}</CardMetaValue>
        </CardMetaItem>
      </CardMetaGrid>

      <CardAction>
        <Button fullWidth color={isActive ? "secondary" : "info"} variant={isActive ? "contained" : "outlined"}>
          {isActive ? labels.activeAction : labels.expiredAction}
        </Button>
      </CardAction>
    </CardRoot>
  );
}

export default AuctionCard;
