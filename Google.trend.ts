import googleTrends from "npm:google-trends-api";
import { parser } from './parser.ts';

export async function getGoogleTrend(): Promise<Result[]> {
  return googleTrends.dailyTrends(
    {
      trendDate: new Date(Date.now()),
      geo: "JP",
    },
    async (err: string | unknown, results: any) => {
      if (err) {
        console.log(err);
        return [];
      }

      try {
        const data = JSON.parse(results);

        const result: Result[] = [];

        data.default.trendingSearchesDays.forEach((day: any) => {
          day.trendingSearches.forEach((trend: any, i: number) => {
            result.push({
              name: trend.title.query,
              rank: parser(++i),
            });
          });
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    }
  );
}

// googleTrends.dailyTrends({
//   trendDate: new Date(Date.now()),
//   geo: 'JP',
// }, function(err: string | unknown, results: any) {
//   if (err) {
//     console.log(err);
//     return
//   }

//   try {
//     const data = JSON.parse(results)

//     data.default.trendingSearchesDays.forEach((day: any) => {
//       day.trendingSearches.forEach((trend: any, i: number) => {
//         console.log(`Rank ${i + 1}: ${trend.title.query}`)
//         console.log('  Trafic: ' + trend.formattedTraffic)
//         console.log('  Related Queries:')
//         trend.relatedQueries.forEach((relatedItem: any) => {
//           console.log(`    ${relatedItem.query}`)
//         })
//         console.log('\n')
//       })
//     })
//   } catch (e) {
//     console.log(e)
//     return []
//   }
// });
