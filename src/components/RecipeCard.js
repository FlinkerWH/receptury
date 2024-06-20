import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CardActionArea } from '@mui/material';

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipeList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={5}
      padding={{ xs: 0, md: 3, lg: 5 }}
      // margin={{ xs: 10, md:10, lg: 5  }}
    >
      {recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={4}>
          <StyledCard
            sx={{
              backgroundColor: '#eee', 
              boxShadow: '0 0 14px 0 #777'
            }}
          >
            <CardMedia
              sx={{ height: 140}}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <Typography sx={{textAlign: 'center' }} gutterBottom variant="body2" component="div">
                  {ingredientLine}
                </Typography>
              ))}
              <Typography gutterBottom variant="body2" component="div"
                sx={{
                  fontSize: '18px',
                  color: 'Green',
                  textAlign: 'center',
                  border: '1px solid #000',
                }}
              >
                {Math.round(recipe.recipe.totalWeight)} kcal
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};