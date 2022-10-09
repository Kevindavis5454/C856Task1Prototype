import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { BottomNav } from './BottomNav';
import { TopBar } from './TopBar';

export const Welcome = () => {
  return (
    <Box
      sx={{
        paddingTop: '74px',
        paddingBottom: '74px',
      }}
    >
      <TopBar />
      <Grid
        container
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        spacing={2}
        
      >
        <Grid
          item
          xs={12}
        >
          <Box
            component="img"
            src={require('./assets/beach.jpeg')}
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography textAlign="center">
            Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano.
            Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Typography fontWeight={800}>
            Visitor Needs
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Restauraunts:
          </Typography>
          <Divider />
          <Typography >
            Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Grocery Stores:
          </Typography>
          <Divider />
          <Typography >
            Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day. 
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Lodging:
          </Typography>
          <Divider />
          <Typography >
            Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort.
            There are many small, family-owned hotels and a growing number of bed and breakfasts.
            All types of lodging are strictly regulated and regularly inspected by the Tanitian government. 
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Entertainment:
          </Typography>
          <Divider />
          <Typography >
            Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano.
            However, there are other things to do, including visiting a local history museum, going on chartered fishing tours,
            snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club,
            seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling.
            Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. 
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Sightseeing:
          </Typography>
          <Divider />
          <Typography >
            Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay.
            Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Transportation:
          </Typography>
          <Divider />
          <Typography >
            Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week.
            Taniti is served by a small airport that can accommodate small jets and propeller planes.
            Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. 
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          ml={1}
        >
          <Typography >
            Ground Transportation:
          </Typography>
          <Divider />
          <Typography >
            Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport.
            Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.
          </Typography>
        </Grid>
      </Grid>
      <BottomNav />
    </Box>
  );
};
