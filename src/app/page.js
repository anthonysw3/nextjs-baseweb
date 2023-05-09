"use client";

import React from "react";

import { Grid, Cell } from "baseui/layout-grid";
import { ParagraphMedium, LabelMedium, LabelSmall } from "baseui/typography";
import { Heading, HeadingLevel } from "baseui/heading";
import { StyledDivider, SIZE } from "baseui/divider";
import { StyledLink } from "baseui/link";
import { StarRating } from "baseui/rating";
import { Block } from "baseui/block";

export default function Home() {
  const [value, setValue] = React.useState(5);
  return (
    <main>
      <section>
        <Grid>
          <Cell span={[12]}>
            <HeadingLevel>
              <Heading styleLevel={4}>
                Next.js 13.4.1 with Base Web 12.2.0
              </Heading>
              <LabelMedium>To get started, edit page.js</LabelMedium>
              <Block paddingTop="20px" paddingBottom="20px">
                <StarRating
                  numItems={5}
                  onChange={(data) => setValue(data.value)}
                  size={22}
                  value={value}
                  readOnly
                />
              </Block>
            </HeadingLevel>
          </Cell>
        </Grid>
      </section>
      <StyledDivider $size={SIZE.module} />
      <section>
        <Grid>
          <Cell span={[12]}>
            <Block paddingTop="10px">
              <ParagraphMedium>
                Check out{" "}
                <StyledLink href="https://nextjs.org/">Next.js</StyledLink> and{" "}
                <StyledLink href="https://baseweb.design">Base Web</StyledLink>.
              </ParagraphMedium>
            </Block>
            <LabelSmall>Combined by Anthony Weston.</LabelSmall>
          </Cell>
        </Grid>
      </section>
    </main>
  );
}
