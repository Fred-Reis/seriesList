import { SafeAreaView, Platform } from "react-native";
import { VStack, useTheme, HStack, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import { AnimatedList } from "../components/AnimatedList";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Home() {
  const { variables, colors } = useTheme();
  const seriesList = [
    {
      id: 250,
      url: "https://www.tvmaze.com/shows/250/kirby-buckets",
      name: "Kirby Buckets",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2014-10-20",
      ended: "2017-02-02",
      officialSite: "http://disneyxd.disney.com/kirby-buckets",
      schedule: {
        time: "07:00",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
      rating: {
        average: null,
      },
      weight: 72,
      network: {
        id: 25,
        name: "Disney XD",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: {
        id: 83,
        name: "DisneyNOW",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      dvdCountry: null,
      externals: {
        tvrage: 37394,
        thetvdb: 278449,
        imdb: "tt3544772",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg",
      },
      summary:
        "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>",
      updated: 1658519538,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/250",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1051658",
        },
      },
    },
    {
      id: 251,
      url: "https://www.tvmaze.com/shows/251/downton-abbey",
      name: "Downton Abbey",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Family", "Romance"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 71,
      premiered: "2010-09-26",
      ended: "2015-12-25",
      officialSite: "http://www.itv.com/downtonabbey",
      schedule: {
        time: "21:00",
        days: ["Sunday"],
      },
      rating: {
        average: 8.8,
      },
      weight: 94,
      network: {
        id: 35,
        name: "ITV",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London",
        },
        officialSite: "https://www.itv.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 26615,
        thetvdb: 193131,
        imdb: "tt1606375",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg",
      },
      summary:
        "<p>The Downton Abbey estate stands a splendid example of confidence and mettle, its family enduring for generations and its staff a well-oiled machine of propriety. But change is afoot at Downton--change far surpassing the new electric lights and telephone. A crisis of inheritance threatens to displace the resident Crawley family, in spite of the best efforts of the noble and compassionate Earl, Robert Crawley; his American heiress wife, Cora his comically implacable, opinionated mother, Violet and his beautiful, eldest daughter, Mary, intent on charting her own course. Reluctantly, the family is forced to welcome its heir apparent, the self-made and proudly modern Matthew Crawley himself none too happy about the new arrangements. As Matthew's bristly relationship with Mary begins to crackle with electricity, hope for the future of Downton's dynasty takes shape. But when petty jealousies and ambitions grow among the family and the staff, scheming and secrets--both delicious and dangerous--threaten to derail the scramble to preserve Downton Abbey. <i>Downton Abbey</i> offers a spot-on portrait of a vanishing way of life.</p>",
      updated: 1658869200,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/251",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/623237",
        },
      },
    },
    {
      id: 252,
      url: "https://www.tvmaze.com/shows/252/girl-meets-world",
      name: "Girl Meets World",
      type: "Scripted",
      language: "English",
      genres: ["Drama", "Comedy", "Family"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2014-06-27",
      ended: "2017-01-20",
      officialSite: "http://disneychannel.disney.com/girl-meets-world",
      schedule: {
        time: "18:00",
        days: ["Friday"],
      },
      rating: {
        average: 7.9,
      },
      weight: 90,
      network: {
        id: 78,
        name: "Disney Channel",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: {
        id: 83,
        name: "DisneyNOW",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      dvdCountry: null,
      externals: {
        tvrage: 33436,
        thetvdb: 267777,
        imdb: "tt2543796",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/316/792450.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/316/792450.jpg",
      },
      summary:
        "<p><b>Girl Meets World</b> is based on ABC's hugely popular sitcom, Boy Meets World (1993). Set in New York City, the show tells the wonderfully funny heartfelt stories that Boy Meets World is renowned for - only this time from a tween girl's perspective - as the curious and bright 7th grader Riley Matthews and her quick-witted friend Maya Fox embark on an unforgettable middle school experience. But their plans for a carefree year will be adjusted slightly under the watchful eyes of Riley's parents - dad Cory, who's also a faculty member (and their new History teacher), and mom Topanga, who owns a trendy after school hangout that specializes in pudding.</p>",
      updated: 1638529709,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/252",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1011244",
        },
      },
    },
    {
      id: 253,
      url: "https://www.tvmaze.com/shows/253/hells-kitchen",
      name: "Hell's Kitchen",
      type: "Reality",
      language: "English",
      genres: ["Food"],
      status: "Running",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2005-05-30",
      ended: null,
      officialSite: "https://www.fox.com/hells-kitchen",
      schedule: {
        time: "20:00",
        days: ["Monday"],
      },
      rating: {
        average: 6.9,
      },
      weight: 97,
      network: {
        id: 4,
        name: "FOX",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: "https://www.fox.com/",
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 3828,
        thetvdb: 74897,
        imdb: "tt0437005",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/418/1046812.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/418/1046812.jpg",
      },
      summary:
        "<p>In <b>Hell's Kitchen</b>, aspiring chefs are put through an intense culinary academy to prove they possess the right combination of ingredients to win a life-changing grand prize.</p>",
      updated: 1660492044,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/253",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2118484",
        },
        nextepisode: {
          href: "https://api.tvmaze.com/episodes/2340873",
        },
      },
    },
    {
      id: 254,
      url: "https://www.tvmaze.com/shows/254/world-series-of-poker",
      name: "World Series of Poker",
      type: "Sports",
      language: "English",
      genres: ["Sports"],
      status: "Running",
      runtime: 60,
      averageRuntime: 64,
      premiered: "2006-08-22",
      ended: null,
      officialSite: null,
      schedule: {
        time: "21:00",
        days: ["Monday", "Tuesday", "Sunday"],
      },
      rating: {
        average: 7.9,
      },
      weight: 66,
      network: {
        id: 180,
        name: "ESPN2",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 16764,
        thetvdb: 79028,
        imdb: "tt2733512",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/1/4656.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4656.jpg",
      },
      summary:
        "<p>The <b>World Series of Poker</b> is where the world's best poker players battle for the title.</p>",
      updated: 1658148339,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/254",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2363496",
        },
      },
    },
    {
      id: 255,
      url: "https://www.tvmaze.com/shows/255/anthony-bourdain-parts-unknown",
      name: "Anthony Bourdain: Parts Unknown",
      type: "Documentary",
      language: "English",
      genres: ["Food", "Travel"],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-04-14",
      ended: "2018-11-11",
      officialSite: "https://explorepartsunknown.com/",
      schedule: {
        time: "21:00",
        days: ["Sunday"],
      },
      rating: {
        average: 8.2,
      },
      weight: 92,
      network: {
        id: 40,
        name: "CNN",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 35416,
        thetvdb: 264108,
        imdb: "tt2845786",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/1/4660.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4660.jpg",
      },
      summary:
        "<p><b>Anthony Bourdain: Parts Unknown</b> has chef Anthony Bourdain traveling to extraordinary locations around the globe to sample a variety of local cuisines.</p>",
      updated: 1645901919,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/255",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1536319",
        },
      },
    },
    {
      id: 256,
      url: "https://www.tvmaze.com/shows/256/comic-book-men",
      name: "Comic Book Men",
      type: "Reality",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-02-12",
      ended: "2018-04-08",
      officialSite: "http://www.amc.com/shows/comic-book-men",
      schedule: {
        time: "00:00",
        days: ["Sunday"],
      },
      rating: {
        average: 8.1,
      },
      weight: 77,
      network: {
        id: 20,
        name: "AMC",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30604,
        thetvdb: 254990,
        imdb: "tt2174367",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/1/4661.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4661.jpg",
      },
      summary:
        "<p>AMC's popular unscripted series <b>Comic Book Men</b> takes another dive into world of geekdom by following the antics in and around master fanboy Kevin Smith's New Jersey comic shop, Jay and Silent Bob's Secret Stash. Leading the team behind the shop's counter are Walt, Bryan, Michael and Ming, who geek out over mind-blowing pop culture artifacts and the legends behind them. Whether it's buying and selling memorabilia or embarking on wild adventures away from the store, the Stash cast shares all the juicy details with Kevin during their hilarious podcast, which is woven in throughout the series.</p>",
      updated: 1641168687,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/256",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/1437175",
        },
      },
    },
    {
      id: 257,
      url: "https://www.tvmaze.com/shows/257/key-peele",
      name: "Key & Peele",
      type: "Scripted",
      language: "English",
      genres: ["Comedy"],
      status: "Ended",
      runtime: 30,
      averageRuntime: 30,
      premiered: "2012-01-31",
      ended: "2015-09-09",
      officialSite: "http://www.cc.com/shows/key-and-peele",
      schedule: {
        time: "22:00",
        days: ["Wednesday"],
      },
      rating: {
        average: 7.3,
      },
      weight: 70,
      network: {
        id: 23,
        name: "Comedy Central",
        country: {
          name: "United States",
          code: "US",
          timezone: "America/New_York",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: 30543,
        thetvdb: 255325,
        imdb: "tt1981558",
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/1/4662.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/1/4662.jpg",
      },
      summary:
        "<p>Keegan-Michael Key and Jordan Peele are the stars of <b>Key &amp; Peele</b>, a show that examines life in a distinctively provocative and irreverent way. Whether it's anger-translating the president, spoofing Nazis or ordering up some soul food, Key &amp; Peele showcases the guys' camaraderie and unique point of view, born from their experiences growing up biracial in a not-quite-post-racial world.</p>",
      updated: 1652858720,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/257",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/216653",
        },
      },
    },
  ];

  return (
    <VStack bg="gray.300" flex={1}>
      <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 35 : 0 }}>
        <HStack
          px={4}
          my={6}
          zIndex={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <MaterialIcons name="search" size={40} color="white" />
          <Input placeholder="Search" />
        </HStack>

        <LinearGradient
          colors={[colors.primary[500], "transparent", colors.primary[700]]}
          style={{
            width: variables.width,
            height:
              Platform.OS === "android"
                ? variables.height * 1.1
                : variables.height,
            position: "absolute",
          }}
        />

        <Text
          color="white"
          fontSize="2xl"
          textAlign="center"
          fontFamily="heading"
          mt={2}
        >
          Series List
        </Text>

        <AnimatedList data={seriesList} mt={10} />

        <Button
          title="next page"
          w="150px"
          alignSelf="flex-end"
          mt={10}
          mr={5}
        />
      </SafeAreaView>
    </VStack>
  );
}
