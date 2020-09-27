export const brickColorMixin = {
    data: function() {
        return {
            COLOR: [
            { brickLinkId: 0, brickLinkName: "Not defined!", legoId: 9999, legoName: "", piecesAndBricksName: "", pickABrickName: "", colorCode: "#FFFFFF" },
            { brickLinkId: 1, brickLinkName: "White", legoId: 1, legoName: "White", piecesAndBricksName: "White", pickABrickName: "White", colorCode: "#F4F4F4" },
            { brickLinkId: 2, brickLinkName: "Tan", legoId: 5, legoName: "Brick Yellow", piecesAndBricksName: "Brick-Yel", pickABrickName: "Brick Yellow", colorCode: "#B0A06F" },
            { brickLinkId: 3, brickLinkName: "Yellow", legoId: 24, legoName: "Bright Yellow", piecesAndBricksName: "Br.Yel", pickABrickName: "Bright Yellow", colorCode: "#FAC80A" },
            { brickLinkId: 4, brickLinkName: "Orange", legoId: 106, legoName: "Bright Orange", piecesAndBricksName: "Br.Orange", pickABrickName: "Bright Orange", colorCode: "#D67923" },
            { brickLinkId: 5, brickLinkName: "Red", legoId: 21, legoName: "Bright Red", piecesAndBricksName: "Br.Red", pickABrickName: "Bright Red", colorCode: "#B40000" },
            { brickLinkId: 6, brickLinkName: "Green", legoId: 28, legoName: "Dark Green", piecesAndBricksName: "Dk.Green", pickABrickName: "Dark Green", colorCode: "#00852B" },
            { brickLinkId: 7, brickLinkName: "Blue", legoId: 23, legoName: "Bright Blue", piecesAndBricksName: "Br.Blue", pickABrickName: "Bright Blue", colorCode: "#1E5AA8" },
            { brickLinkId: 8, brickLinkName: "Brown", legoId: 25, legoName: "Earth Orange", piecesAndBricksName: "Earth-Ora", pickABrickName: "N/A", colorCode: "#543324" },
            { brickLinkId: 9, brickLinkName: "Light Gray", legoId: 2, legoName: "Grey", piecesAndBricksName: "Grey", pickABrickName: "N/A", colorCode: "#8A928D" },
            { brickLinkId: 10, brickLinkName: "Dark Gray", legoId: 27, legoName: "Dark Grey", piecesAndBricksName: "Dk.Grey", pickABrickName: "N/A", colorCode: "#545955" },
            { brickLinkId: 11, brickLinkName: "Black", legoId: 26, legoName: "Black", piecesAndBricksName: "Black", pickABrickName: "Black", colorCode: "#1B2A34" },
            { brickLinkId: 12, brickLinkName: "Trans-Clear", legoId: 40, legoName: "Transparent", piecesAndBricksName: "Tr.", pickABrickName: "Transparent", colorCode: "#EEEEEE" },
            { brickLinkId: 13, brickLinkName: "Trans-Black", legoId: 111, legoName: "Transparent Brown", piecesAndBricksName: "Tr.Brown", pickABrickName: "Tr. Brown", colorCode: "#BBB29E" },
            { brickLinkId: 14, brickLinkName: "Trans-Dark Blue", legoId: 43, legoName: "Transparent Blue", piecesAndBricksName: "Tr.Blue", pickABrickName: "Tr. Blue", colorCode: "#77B7CC" },
            { brickLinkId: 15, brickLinkName: "Trans-Light Blue", legoId: 42, legoName: "Transparent Light Blue", piecesAndBricksName: "Tr.L.Blue", pickABrickName: "Tr. Light Blue", colorCode: "#ADDDED" },
            { brickLinkId: 16, brickLinkName: "Trans-Neon Green", legoId: 49, legoName: "Transparent Fluorescent Green", piecesAndBricksName: "Tr.Fl.Green", pickABrickName: "N/A", colorCode: "#FAF15B" },
            { brickLinkId: 17, brickLinkName: "Trans-Red", legoId: 41, legoName: "Transparent Red", piecesAndBricksName: "Tr.Red", pickABrickName: "Tr.Red", colorCode: "#B82700" },
            { brickLinkId: 18, brickLinkName: "Trans-Neon Orange", legoId: 47, legoName: "Transparent Fluorescent Reddish Orange", piecesAndBricksName: "Tr. Fl.Redora", pickABrickName: "Tr. Fluore. Redd. Orange", colorCode: "#D06D4F" },
            { brickLinkId: 19, brickLinkName: "Trans-Yellow", legoId: 44, legoName: "Transparent Yellow", piecesAndBricksName: "Tr.Yel", pickABrickName: "Tr. Yellow", colorCode: "#FAF15D" },
            { brickLinkId: 20, brickLinkName: "Trans-Green", legoId: 48, legoName: "Transparent Green", piecesAndBricksName: "Tr. Green", pickABrickName: "Tr. Green", colorCode: "#73B464" },
            { brickLinkId: 21, brickLinkName: "Chrome Gold", legoId: 310, legoName: "Metalized Gold", piecesAndBricksName: "Gold", pickABrickName: "N/A", colorCode: "#DFC176" },
            { brickLinkId: 22, brickLinkName: "Chrome Silver", legoId: 309, legoName: "Metalized Silver", piecesAndBricksName: "Silver", pickABrickName: "N/A", colorCode: "#CECECE" },
            { brickLinkId: 23, brickLinkName: "Pink", legoId: 9, legoName: "Light Reddish Violet", piecesAndBricksName: "L.Redviol", pickABrickName: "N/A", colorCode: "#F6A9BB" },
            { brickLinkId: 24, brickLinkName: "Purple", legoId: 104, legoName: "Bright Violet", piecesAndBricksName: "Br. Violet", pickABrickName: "N/A", colorCode: "#671FA1" },
            { brickLinkId: 25, brickLinkName: "Salmon", legoId: 101, legoName: "Medium Red", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#F06D61" },
            { brickLinkId: 26, brickLinkName: "Light Salmon", legoId: 100, legoName: "Light Red", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#F9B7A5" },
            { brickLinkId: 28, brickLinkName: "Nougat", legoId: 18, legoName: "Nougat", piecesAndBricksName: "Nougat", pickABrickName: "N/A", colorCode: "#BB805A" },
            { brickLinkId: 29, brickLinkName: "Earth Orange", legoId: 12, legoName: "Light Orange Brown", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FF8300" },
            { brickLinkId: 31, brickLinkName: "Medium Orange", legoId: 105, legoName: "Bright Yellowish Orange", piecesAndBricksName: "Br.Yelora", pickABrickName: "N/A", colorCode: "#F58624" },
            { brickLinkId: 32, brickLinkName: "Light Orange", legoId: 121, legoName: "Medium Yellowish Orange", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#F89A39" },
            { brickLinkId: 33, brickLinkName: "Light Yellow", legoId: 3, legoName: "Light Yellow", piecesAndBricksName: "L.Yel", pickABrickName: "N/A", colorCode: "#FFD67F" },
            { brickLinkId: 34, brickLinkName: "Lime", legoId: 119, legoName: "Bright Yellowish Green", piecesAndBricksName: "Br.Yel-Green", pickABrickName: "Bright Yellowish Green", colorCode: "#A5CA18" },
            { brickLinkId: 35, brickLinkName: "Light Lime", legoId: 120, legoName: "Light Yellowish Green", piecesAndBricksName: "L.Yel-Green", pickABrickName: "N/A", colorCode: "#DEEA92" },
            { brickLinkId: 36, brickLinkName: "Bright Green", legoId: 37, legoName: "Bright Green", piecesAndBricksName: "Br.Green", pickABrickName: "Bright Green", colorCode: "#CDADF8" },
            { brickLinkId: 37, brickLinkName: "Medium Green", legoId: 29, legoName: "Medium Green", piecesAndBricksName: "Md.Green", pickABrickName: "N/A", colorCode: "#7FC475" },
            { brickLinkId: 38, brickLinkName: "Light Green", legoId: 6, legoName: "Light Green", piecesAndBricksName: "L.Green", pickABrickName: "N/A", colorCode: "#ADD9A8" },
            { brickLinkId: 39, brickLinkName: "Dark Turquoise", legoId: 107, legoName: "Bright Bluish Green", piecesAndBricksName: "Br.Bluegreen", pickABrickName: "Bright Bluish Green", colorCode: "#069D9F" },
            { brickLinkId: 40, brickLinkName: "Light Turquoise", legoId: 116, legoName: "Medium Bluish Green", piecesAndBricksName: "Md.Bl-Green", pickABrickName: "N/A", colorCode: "#00AAA4" },
            { brickLinkId: 41, brickLinkName: "Aqua", legoId: 118, legoName: "Light Bluish Green", piecesAndBricksName: "L.Blue-Green", pickABrickName: "N/A", colorCode: "#9CD6CC" },
            { brickLinkId: 42, brickLinkName: "Medium Blue", legoId: 102, legoName: "Medium Blue", piecesAndBricksName: "Md.Blue", pickABrickName: "Medium Blue", colorCode: "#7396C8" },
            { brickLinkId: 43, brickLinkName: "Violet", legoId: 110, legoName: "Bright Bluish Violet", piecesAndBricksName: "Br.Blueviol", pickABrickName: "N/A", colorCode: "#26469A" },
            { brickLinkId: 44, brickLinkName: "Light Violet", legoId: 39, legoName: "Light Bluish Violet", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFD500" },
            { brickLinkId: 46, brickLinkName: "Glow In Dark Opaque", legoId: 50, legoName: "Phosphorescent White", piecesAndBricksName: "Phos.White", pickABrickName: "N/A", colorCode: "#E5DFD3" },
            { brickLinkId: 47, brickLinkName: "Dark Pink", legoId: 22, legoName: "Medium Reddish Violet", piecesAndBricksName: "Md.Redviol", pickABrickName: "N/A", colorCode: "#D05098" },
            { brickLinkId: 47, brickLinkName: "Dark Pink", legoId: 221, legoName: "Bright Purple", piecesAndBricksName: "Br. Purple", pickABrickName: "Bright Purple", colorCode: "#D3359D" },
            { brickLinkId: 48, brickLinkName: "Sand Green", legoId: 151, legoName: "Sand Green", piecesAndBricksName: "Sand Green", pickABrickName: "Sand Green", colorCode: "#708E7C" },
            { brickLinkId: 49, brickLinkName: "Very Light Gray", legoId: 103, legoName: "Light Grey", piecesAndBricksName: "L.Grey", pickABrickName: "N/A", colorCode: "#BCB4A5" },
            { brickLinkId: 50, brickLinkName: "Trans-Dark Pink", legoId: 113, legoName: "Transparent Medium Reddish Violet", piecesAndBricksName: "Tr. Ml.R.Viol", pickABrickName: "Tr. Medium Reddish Violet", colorCode: "#FD8ECF" },
            { brickLinkId: 50, brickLinkName: "Trans-Dark Pink", legoId: 158, legoName: "Transparent Fluorescent Red", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#F18EBB" },
            { brickLinkId: 51, brickLinkName: "Trans-Purple", legoId: 126, legoName: "Transparent Bright Bluish Violet", piecesAndBricksName: "Tr. Kl.Bl.Vio", pickABrickName: "N/A", colorCode: "#9C95C7" },
            { brickLinkId: 51, brickLinkName: "Trans-Purple", legoId: 236, legoName: "Transparent Bright Reddish Lilac", piecesAndBricksName: "Tr. Br. Red. Li", pickABrickName: "N/A", colorCode: "#8D73B3" },
            { brickLinkId: 52, brickLinkName: "Chrome Blue", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 54, brickLinkName: "Sand Purple", legoId: 136, legoName: "Sand Violet", piecesAndBricksName: "Sand Violet", pickABrickName: "N/A", colorCode: "#75657D" },
            { brickLinkId: 55, brickLinkName: "Sand Blue", legoId: 135, legoName: "Sand Blue", piecesAndBricksName: "Sand Blue", pickABrickName: "N/A", colorCode: "#70819A" },
            { brickLinkId: 57, brickLinkName: "Chrome Antique Brass", legoId: 9999, legoName: "Antique Gold", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#645A4C" },
            { brickLinkId: 58, brickLinkName: "Sand Red", legoId: 153, legoName: "Sand Red", piecesAndBricksName: "Sand Red", pickABrickName: "N/A", colorCode: "#88605E" },
            { brickLinkId: 59, brickLinkName: "Dark Red", legoId: 154, legoName: "(New) Dark Red", piecesAndBricksName: "New Dark Red", pickABrickName: "New Dark Red", colorCode: "#720012" },
            { brickLinkId: 60, brickLinkName: "Milky White", legoId: 20, legoName: "Nature", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#E9E9E9" },
            { brickLinkId: 61, brickLinkName: "Pearl Light Gold", legoId: 127, legoName: "Gold", piecesAndBricksName: "Gold", pickABrickName: "N/A", colorCode: "#DEAC66" },
            { brickLinkId: 62, brickLinkName: "Light Blue", legoId: 45, legoName: "Light Blue", piecesAndBricksName: "L.Blue", pickABrickName: "N/A", colorCode: "#97CBD9" },
            { brickLinkId: 63, brickLinkName: "Dark Blue", legoId: 140, legoName: "Earth Blue", piecesAndBricksName: "Earth Blue", pickABrickName: "Earth Blue", colorCode: "#19325A" },
            { brickLinkId: 64, brickLinkName: "Chrome Green", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 65, brickLinkName: "Metallic Gold", legoId: 299, legoName: "Warm Gold, Drum Lacquered / Gold Metalized / Gold Lacquered", piecesAndBricksName: "Gold Ink", pickABrickName: "N/A", colorCode: "#DEB060" },
            { brickLinkId: 66, brickLinkName: "Pearl Light Gray", legoId: 131, legoName: "Silver", piecesAndBricksName: "Silver", pickABrickName: "N/A", colorCode: "#A0A0A0" },
            { brickLinkId: 66, brickLinkName: "Pearl Light Gray", legoId: 296, legoName: "Cool Silver", piecesAndBricksName: "C.Silver", pickABrickName: "N/A", colorCode: "#ADADAD" },
            { brickLinkId: 67, brickLinkName: "Metallic Silver", legoId: 298, legoName: "Cool Silver, Drum Lacquered", piecesAndBricksName: "C.Silver, Dr. L", pickABrickName: "N/A", colorCode: "#767676" },
            { brickLinkId: 68, brickLinkName: "Dark Orange", legoId: 38, legoName: "Dark Orange", piecesAndBricksName: "Dk.Ora", pickABrickName: "Dark Orange", colorCode: "#29A5FA" },
            { brickLinkId: 69, brickLinkName: "Dark Tan", legoId: 138, legoName: "Sand Yellow", piecesAndBricksName: "Sand Yellow", pickABrickName: "Sand Yellow", colorCode: "#897D62" },
            { brickLinkId: 70, brickLinkName: "Metallic Green", legoId: 200, legoName: "Lemon Metallic", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#6A7944" },
            { brickLinkId: 71, brickLinkName: "Magenta", legoId: 124, legoName: "Bright Reddish Violet", piecesAndBricksName: "Br.Red-Viol.", pickABrickName: "Bright Reddish Violet", colorCode: "#901F76" },
            { brickLinkId: 72, brickLinkName: "Maersk Blue", legoId: 11, legoName: "Pastel Blue", piecesAndBricksName: "PastBlu", pickABrickName: "N/A", colorCode: "#ABD9FF" },
            { brickLinkId: 73, brickLinkName: "Medium Violet", legoId: 112, legoName: "Medium Bluish Violet", piecesAndBricksName: "Ml.Blueviol", pickABrickName: "N/A", colorCode: "#4861AC" },
            { brickLinkId: 73, brickLinkName: "Medium Violet", legoId: 219, legoName: "Lilac", piecesAndBricksName: "Lilac", pickABrickName: "N/A", colorCode: "#564E9D" },
            { brickLinkId: 74, brickLinkName: "Trans-Medium Blue", legoId: 143, legoName: "Transparent Fluorescent Blue", piecesAndBricksName: "Tr. Fl. Blue", pickABrickName: "N/A", colorCode: "#D0E5FF" },
            { brickLinkId: 76, brickLinkName: "Medium Lime", legoId: 115, legoName: "Medium Yellowish Green", piecesAndBricksName: "Md.Yel-Green", pickABrickName: "N/A", colorCode: "#B7D425" },
            { brickLinkId: 77, brickLinkName: "Pearl Dark Gray", legoId: 148, legoName: "Metallic Dark Grey", piecesAndBricksName: "Met.Dk.Grey", pickABrickName: "Titanium Metallic", colorCode: "#484D48" },
            { brickLinkId: 77, brickLinkName: "Pearl Dark Gray", legoId: 316, legoName: "Titanium Metallic", piecesAndBricksName: "Titan. Metal.", pickABrickName: "N/A", colorCode: "#3E3C39" },
            { brickLinkId: 78, brickLinkName: "Metal Blue", legoId: 145, legoName: "Metallic Sand Blue", piecesAndBricksName: "Met.Sand.Blu", pickABrickName: "N/A", colorCode: "#5B7590" },
            { brickLinkId: 80, brickLinkName: "Dark Green", legoId: 141, legoName: "Earth Green", piecesAndBricksName: "Earth Green", pickABrickName: "Earth Green", colorCode: "#00451A" },
            { brickLinkId: 81, brickLinkName: "Flat Dark Gold", legoId: 147, legoName: "Metallic Sand Yellow", piecesAndBricksName: "Met.Sand.Yel", pickABrickName: "N/A", colorCode: "#83724F" },
            { brickLinkId: 82, brickLinkName: "Chrome Pink", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 83, brickLinkName: "Pearl White", legoId: 183, legoName: "Metallic White", piecesAndBricksName: "Met. White", pickABrickName: "N/A", colorCode: "#F6F2DF" },
            { brickLinkId: 84, brickLinkName: "Copper", legoId: 139, legoName: "Copper", piecesAndBricksName: "Copper Metallic", pickABrickName: "N/A", colorCode: "#764D3B" },
            { brickLinkId: 85, brickLinkName: "Dark Bluish Gray", legoId: 199, legoName: "Dark Stone Grey", piecesAndBricksName: "Dk. St. Grey", pickABrickName: "Dark Stone Grey", colorCode: "#646464" },
            { brickLinkId: 86, brickLinkName: "Light Bluish Gray", legoId: 194, legoName: "Medium Stone Grey", piecesAndBricksName: "Med. St-Grey", pickABrickName: "Medium Stone Grey", colorCode: "#969696" },
            { brickLinkId: 87, brickLinkName: "Sky Blue", legoId: 232, legoName: "Dove Blue", piecesAndBricksName: "Do. Blue", pickABrickName: "N/A", colorCode: "#77C9D8" },
            { brickLinkId: 88, brickLinkName: "Reddish Brown", legoId: 192, legoName: "Reddish Brown", piecesAndBricksName: "Red. Brown", pickABrickName: "Reddish Brown", colorCode: "#5F3109" },
            { brickLinkId: 89, brickLinkName: "Dark Purple", legoId: 268, legoName: "Medium Lilac", piecesAndBricksName: "M. Lilac", pickABrickName: "Medium Lilac", colorCode: "#441A91" },
            { brickLinkId: 90, brickLinkName: "Light Nougat", legoId: 283, legoName: "Light Nougat", piecesAndBricksName: "L.Nougat", pickABrickName: "N/A", colorCode: "#FFC995" },
            { brickLinkId: 91, brickLinkName: "Medium Brown", legoId: 217, legoName: "Brown", piecesAndBricksName: "Brown", pickABrickName: "N/A", colorCode: "#7B5D41" },
            { brickLinkId: 93, brickLinkName: "Light Purple", legoId: 198, legoName: "Bright Reddish Lilac", piecesAndBricksName: "Br. Red. Lilac", pickABrickName: "N/A", colorCode: "#8A12A8" },
            { brickLinkId: 94, brickLinkName: "Medium Dark Pink", legoId: 16, legoName: "Pink", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FF879C" },
            { brickLinkId: 95, brickLinkName: "Flat Silver", legoId: 179, legoName: "Silver Flip/Flop", piecesAndBricksName: "N/A", pickABrickName: "Silver Metallic", colorCode: "#737271" },
            { brickLinkId: 95, brickLinkName: "Flat Silver", legoId: 315, legoName: "Silver Metallic", piecesAndBricksName: "Silver Met.", pickABrickName: "N/A", colorCode: "#8C8C8C" },
            { brickLinkId: 96, brickLinkName: "Very Light Orange", legoId: 36, legoName: "Light Yellowish Orange", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FDC383" },
            { brickLinkId: 97, brickLinkName: "Blue-Violet", legoId: 195, legoName: "Royal Blue", piecesAndBricksName: "R.Blue", pickABrickName: "N/A", colorCode: "#1C58A7" },
            { brickLinkId: 98, brickLinkName: "Trans-Orange", legoId: 182, legoName: "Transparent Bright Orange", piecesAndBricksName: "Tr. Br. Orange", pickABrickName: "Tr. Bright Orange", colorCode: "#E18D0A" },
            { brickLinkId: 99, brickLinkName: "Very Light Bluish Gray", legoId: 208, legoName: "Light Stone Grey", piecesAndBricksName: "Lgh. St. Grey", pickABrickName: "N/A", colorCode: "#C8C8C8" },
            { brickLinkId: 100, brickLinkName: "Glitter Trans-Dark Pink", legoId: 114, legoName: "Transparent Pink Glitter / Transparent Medium Reddish Violet Glitter", piecesAndBricksName: "Tr. M.R.V.Gli", pickABrickName: "N/A", colorCode: "#FE00FE" },
            { brickLinkId: 101, brickLinkName: "Glitter Trans-Clear", legoId: 117, legoName: "Transparent with Glitter", piecesAndBricksName: "Tr. W.Glitter", pickABrickName: "N/A", colorCode: "#F7F7F7" },
            { brickLinkId: 102, brickLinkName: "Glitter Trans-Purple", legoId: 129, legoName: "Transparent Bluish Violet (Glitter)", piecesAndBricksName: "Tr. Br.Bl.V.G", pickABrickName: "N/A", colorCode: "#435493" },
            { brickLinkId: 103, brickLinkName: "Bright Light Yellow", legoId: 226, legoName: "Cool Yellow", piecesAndBricksName: "Cool Yel.", pickABrickName: "Cool Yellow", colorCode: "#FFEC6C" },
            { brickLinkId: 104, brickLinkName: "Bright Pink", legoId: 222, legoName: "Light Purple", piecesAndBricksName: "Lgh. Purple", pickABrickName: "Light Purple", colorCode: "#FF9ECD" },
            { brickLinkId: 105, brickLinkName: "Bright Light Blue", legoId: 212, legoName: "Light Royal Blue", piecesAndBricksName: "Lgh. Roy. Blue", pickABrickName: "Light Royal Blue", colorCode: "#9DC3F7" },
            { brickLinkId: 106, brickLinkName: "Fabuland Brown", legoId: 4, legoName: "Brick Red", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#F2705E" },
            { brickLinkId: 107, brickLinkName: "Trans-Pink", legoId: 230, legoName: "Transparent Bright Purple", piecesAndBricksName: "Tr. Br. Purple", pickABrickName: "N/A", colorCode: "#ECA3C9" },
            { brickLinkId: 108, brickLinkName: "Trans-Bright Green", legoId: 311, legoName: "Transparent Bright Green", piecesAndBricksName: "Tr. Br. Green", pickABrickName: "N/A", colorCode: "#AFD246" },
            { brickLinkId: 109, brickLinkName: "Dark Blue-Violet", legoId: 196, legoName: "Dark Royal Blue", piecesAndBricksName: "Dk. R.Blue", pickABrickName: "N/A", colorCode: "#0E3E9A" },
            { brickLinkId: 110, brickLinkName: "Bright Light Orange", legoId: 191, legoName: "Flame Yellowish Orange", piecesAndBricksName: "Fl. Yell-Ora", pickABrickName: "Flame Yellowish Orange", colorCode: "#FCAC00" },
            { brickLinkId: 111, brickLinkName: "Speckle Black-Silver", legoId: 304, legoName: "Cool Silver, Diffuse", piecesAndBricksName: "Co.Silver DiF", pickABrickName: "N/A", colorCode: "#DFDAD1" },
            { brickLinkId: 113, brickLinkName: "Trans-Aqua", legoId: 229, legoName: "Transparent Light Bluish Green", piecesAndBricksName: "Tr. Lgh. Bl. Gr", pickABrickName: "N/A", colorCode: "#ACD4DE" },
            { brickLinkId: 114, brickLinkName: "Trans-Light Purple", legoId: 284, legoName: "Transparent Reddish Lilac", piecesAndBricksName: "Tr. Red-Lilac", pickABrickName: "N/A", colorCode: "#E0D0E5" },
            { brickLinkId: 115, brickLinkName: "Pearl Gold", legoId: 297, legoName: "Warm Gold", piecesAndBricksName: "W.Gold", pickABrickName: "Warm Gold", colorCode: "#AA7F2E" },
            { brickLinkId: 116, brickLinkName: "Speckle Black-Copper", legoId: 306, legoName: "Copper, Diffuse", piecesAndBricksName: "Cop. Dif.", pickABrickName: "N/A", colorCode: "#AE9A91" },
            { brickLinkId: 118, brickLinkName: "Glow In Dark Trans", legoId: 294, legoName: "Phosphorescent Green", piecesAndBricksName: "Ph.Green", pickABrickName: "N/A", colorCode: "#D5DC8A" },
            { brickLinkId: 119, brickLinkName: "Pearl Very Light Gray", legoId: 150, legoName: "Metallic Light Grey", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#989B99" },
            { brickLinkId: 120, brickLinkName: "Dark Brown", legoId: 308, legoName: "Dark Brown", piecesAndBricksName: "Dk. Brown", pickABrickName: "Dark Brown", colorCode: "#372100" },
            { brickLinkId: 121, brickLinkName: "Trans-Neon Yellow", legoId: 157, legoName: "Transparent Fluorescent Yellow", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFF65C" },
            { brickLinkId: 122, brickLinkName: "Chrome Black", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 123, brickLinkName: "Mx White", legoId: 1, legoName: "White", piecesAndBricksName: "White", pickABrickName: "White", colorCode: "#F4F4F4" },
            { brickLinkId: 124, brickLinkName: "Mx Light Bluish Gray", legoId: 32, legoName: "Light Bluish Gray", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#D2D5E4" },
            { brickLinkId: 125, brickLinkName: "Mx Light Gray", legoId: 2, legoName: "Light Gray", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#CACFD0" },
            { brickLinkId: 126, brickLinkName: "Mx Charcoal Gray", legoId: 40, legoName: "Charcoal Gray", piecesAndBricksName: "N/A", pickABrickName: "Transparent", colorCode: "#696C7A" },
            { brickLinkId: 127, brickLinkName: "Mx Tile Gray", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 128, brickLinkName: "Mx Black", legoId: 3, legoName: "Black", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#4D4C52" },
            { brickLinkId: 129, brickLinkName: "Mx Red", legoId: 13, legoName: "Red", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FF442B" },
            { brickLinkId: 130, brickLinkName: "Mx Pink Red", legoId: 33, legoName: "Pink Red", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FF9BBA" },
            { brickLinkId: 131, brickLinkName: "Mx Tile Brown", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 132, brickLinkName: "Mx Brown", legoId: 9, legoName: "Brown", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#A97953" },
            { brickLinkId: 133, brickLinkName: "Mx Buff", legoId: 5, legoName: "Buff", piecesAndBricksName: "N/A", pickABrickName: "Brick Yellow", colorCode: "#FDDFB4" },
            { brickLinkId: 134, brickLinkName: "Mx Terracotta", legoId: 4, legoName: "Terracotta", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#E17E4F" },
            { brickLinkId: 135, brickLinkName: "Mx Orange", legoId: 12, legoName: "Orange", piecesAndBricksName: "L.Orabrown", pickABrickName: "N/A", colorCode: "#D86D2C" },
            { brickLinkId: 136, brickLinkName: "Mx Light Orange", legoId: 39, legoName: "Light Orange", piecesAndBricksName: "L.Blueviol", pickABrickName: "N/A", colorCode: "#AFBED6" },
            { brickLinkId: 137, brickLinkName: "Mx Light Yellow", legoId: 35, legoName: "Light Yellow", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFF787" },
            { brickLinkId: 138, brickLinkName: "Mx Ochre Yellow", legoId: 6, legoName: "Ocher Yellow", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFDA32" },
            { brickLinkId: 139, brickLinkName: "Mx Lemon", legoId: 15, legoName: "Lemon", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFF400" },
            { brickLinkId: 140, brickLinkName: "Mx Olive Green", legoId: 7, legoName: "Olive Green", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#91B264" },
            { brickLinkId: 141, brickLinkName: "Mx Pastel Green", legoId: 14, legoName: "Pastel Green", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#90E600" },
            { brickLinkId: 142, brickLinkName: "Mx Aqua Green", legoId: 34, legoName: "Aqua Green", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#56F3E4" },
            { brickLinkId: 143, brickLinkName: "Mx Tile Blue", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 144, brickLinkName: "Mx Medium Blue", legoId: 38, legoName: "Medium Blue", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#61AFFF" },
            { brickLinkId: 145, brickLinkName: "Mx Pastel Blue", legoId: 11, legoName: "Pastel Blue", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#5DC6EB" },
            { brickLinkId: 146, brickLinkName: "Mx Teal Blue", legoId: 8, legoName: "Teal Blue", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#389EBC" },
            { brickLinkId: 147, brickLinkName: "Mx Violet", legoId: 37, legoName: "Violet", piecesAndBricksName: "Br.Green", pickABrickName: "Bright Green", colorCode: "#58AB41" },
            { brickLinkId: 148, brickLinkName: "Mx Pink", legoId: 16, legoName: "Pink", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FCABCB" },
            { brickLinkId: 149, brickLinkName: "Mx Clear", legoId: 0, legoName: "Clear", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 150, brickLinkName: "Medium Nougat", legoId: 312, legoName: "Medium Nougat", piecesAndBricksName: "M. Nougat", pickABrickName: "Medium Nougat", colorCode: "#AA7D55" },
            { brickLinkId: 151, brickLinkName: "Speckle Black-Gold", legoId: 9999, legoName: "N/A", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FFFFFF" },
            { brickLinkId: 152, brickLinkName: "Light Aqua", legoId: 323, legoName: "Aqua", piecesAndBricksName: "Aqua", pickABrickName: "N/A", colorCode: "#D3F2EA" },
            { brickLinkId: 153, brickLinkName: "Dark Azure", legoId: 321, legoName: "Dark Azur", piecesAndBricksName: "Dark Azur", pickABrickName: "Dark Azur", colorCode: "#469BC3" },
            { brickLinkId: 154, brickLinkName: "Lavender", legoId: 325, legoName: "Lavender", piecesAndBricksName: "Lavender", pickABrickName: "Lavender", colorCode: "#CDA4DE" },
            { brickLinkId: 155, brickLinkName: "Olive Green", legoId: 330, legoName: "Olive Green", piecesAndBricksName: "Olive Green", pickABrickName: "Olive Green", colorCode: "#77774E" },
            { brickLinkId: 156, brickLinkName: "Medium Azure", legoId: 322, legoName: "Medium Azur", piecesAndBricksName: "Medium Azur", pickABrickName: "Medium Azur", colorCode: "#68C3E2" },
            { brickLinkId: 157, brickLinkName: "Medium Lavender", legoId: 324, legoName: "Medium Lavender", piecesAndBricksName: "Medium Lavender", pickABrickName: "Medium Lavendel", colorCode: "#A06EB9" },
            { brickLinkId: 158, brickLinkName: "Yellowish Green", legoId: 326, legoName: "Spring Yellowish Green", piecesAndBricksName: "Spr. Yell. Gree", pickABrickName: "Spring Yellowish Green", colorCode: "#E2F99A" },
            { brickLinkId: 159, brickLinkName: "Glow In Dark White", legoId: 329, legoName: "White Glow", piecesAndBricksName: "White Glow", pickABrickName: "N/A", colorCode: "#F5F3D7" },
            { brickLinkId: 160, brickLinkName: "Fabuland Orange", legoId: 19, legoName: "Light Brown", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#CF8A47" },
            { brickLinkId: 161, brickLinkName: "Dark Yellow", legoId: 180, legoName: "Curry", piecesAndBricksName: "Curry", pickABrickName: "N/A", colorCode: "#DD982E" },
            { brickLinkId: 162, brickLinkName: "Glitter Trans-Light Blue", legoId: 302, legoName: "Transparent Light Blue with Glitter", piecesAndBricksName: "Tr Li.Blue W/", pickABrickName: "N/A", colorCode: "#00BAD2" },
            { brickLinkId: 163, brickLinkName: "Glitter Trans-Neon Green", legoId: 339, legoName: "Transparent Fluorescent Green with Glitter", piecesAndBricksName: "Tr. Fl.Gre W/Gli", pickABrickName: "N/A", colorCode: "#F0FC00" },
            { brickLinkId: 164, brickLinkName: "Trans-Light Orange", legoId: 231, legoName: "Transparent Flame Yellowish Orange", piecesAndBricksName: "Tr. Fl. Yel Ora", pickABrickName: "N/A", colorCode: "#FCB76D" },
            { brickLinkId: 165, brickLinkName: "Neon Orange", legoId: 133, legoName: "Neon Orange", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#EF5828" },
            { brickLinkId: 166, brickLinkName: "Neon Green", legoId: 134, legoName: "Neon Green", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#CDDD34" },
            { brickLinkId: 220, brickLinkName: "Coral", legoId: 353, legoName: "Vibrant Coral", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#FF6D77" },
            { brickLinkId: 221, brickLinkName: "Trans-Light Green", legoId: 285, legoName: "Transparent Light Green", piecesAndBricksName: "Tr. L.Green", pickABrickName: "N/A", colorCode: "#E4D6DA" },
            { brickLinkId: 222, brickLinkName: "Glitter Trans-Orange", legoId: 341, legoName: "(Transparent Bright Orange with Glitter)", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#D04010" },
            { brickLinkId: 223, brickLinkName: "Satin Trans-Light Blue", legoId: 362, legoName: "Transparent Blue Opal", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#68BCC5" },
            { brickLinkId: 224, brickLinkName: "Satin Trans-Dark Pink", legoId: 364, legoName: "Transparent Medium Reddish Violet Opal", piecesAndBricksName: "N/A", pickABrickName: "N/A", colorCode: "#CE1D9B" },
            { brickLinkId: 225, brickLinkName: "Dark Nougat", legoId: 128, legoName: "Dark Nougat", piecesAndBricksName: "Dark Nougat", pickABrickName: "N/A", colorCode: "#AD6140" },
            { brickLinkId: 226, brickLinkName: "Trans-Light Bright Green", legoId: 227, legoName: "Transparent Bright Yellowish Green", piecesAndBricksName: "Tr. Br. Yel gr", pickABrickName: "N/A", colorCode: "#C9E788" },
            { brickLinkId: 227, brickLinkName: "Clikits Lavender", legoId: 218, legoName: "Reddish Lilac", piecesAndBricksName: "Red. Lilac", pickABrickName: "N/A", colorCode: "#8E5597" }
        ]
    }
    }
  };