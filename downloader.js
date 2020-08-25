const axios = require("axios");
const chunk = {
	0: "c7cf0a6ba7496c89f313",
	1: "8dfa41a446cf21b5d8f5",
	2: "5b9d3b26ac03e4fc969b",
	3: "15bb1eb2dfc1558d040a",
	4: "74e52b9e03903965e8da",
	5: "762ac1e6326b17a1aa3a",
	6: "32043a82f93319ca04ae",
	7: "bdecc11e259db0b0ac63",
	8: "8875623d25d943c7550a",
	9: "2030854a18d8eafb000b",
	10: "d249405a6165b4c74350",
	11: "ef1d5d7aff7a2352911e",
	12: "790dce266edf72605bce",
	13: "87c1aed9611707316f7d",
	14: "8fcd1bfd4bc52f888fde",
	15: "4e3ef80f61eebb9d6d82",
	16: "60bf208623d17b720a3e",
	17: "a3b8b86ebe141fd0ac4f",
	18: "f1867301a4a002729b94",
	19: "a34f0dc03879eae6019f",
	20: "9e01b0068f684973d12e",
	21: "c1409e73070ff945592b",
	22: "c0af8c3f77bc3525eb09",
	23: "3500b4b37449b2378869",
	24: "7635d1f562042c875abe",
	25: "242853d095621367d2db",
	26: "f709b1164167697a83d3",
	27: "d7c5ec0dbff7235db8a8",
	28: "31c17c652675534610fd",
	29: "cf2239f5965753a3ee59",
	30: "333160b3161064ae6b96",
	31: "e90397808433ca439135",
	32: "7af46353453d75a5df4d",
	33: "fcf8691948c71ba7dbeb",
	34: "63e46543b7d9037fb157",
	35: "5b22b3ced9db95400136",
	36: "77709371e58cb9ffc2bf",
	37: "dd1e23f3e3d9a32ee361",
	38: "124215d2d92423001928",
	39: "489a4cb943f36bf83c9f",
	40: "d58bc20bd7bb0ed4872e",
	41: "54db71ff3ee5912d80ea",
	42: "c07dd9fcd3858a728834",
	43: "69790b5d3972e11c1ede",
	44: "92f0fafe78b7c15f5459",
	45: "8ce90539e620df2fc9b6",
	46: "6828cfca4dfbcd69eb21",
	47: "228a36c6e35197c12110",
	48: "cb6ac08c4e125f2c255f",
	49: "b9ab472076c5b4ab6e12",
	50: "f6680ac24f35c0d46251",
	51: "a6016cf697d5f06388a9",
	52: "a53707a29f855d724ee4",
	53: "0182015b3c2d78843db9",
	54: "4cb5e62259bac1ad3885",
	55: "4cd3fcec7824c790f043",
	56: "22ae312018d641ec945d",
	57: "47a230feb6ec28cb2e5e",
	58: "b9d53340461d4460539c",
	59: "c567fd3536c095414b0c",
	60: "64184e019c022ae132c9",
	61: "4801439a3ce4b3942105",
	62: "8ce20bcd7d2271128cc3",
	63: "c6578fe653b5f10a9328",
	64: "84325a4a47162d187297",
	65: "9ea8d2b58b52e005e52a",
	66: "54e08b45c10bc0f4be8f",
	67: "c4dbc6a87654bec699b4",
	68: "573100b75310b3f35e11",
	69: "440ef20effe95339b8fd",
	70: "2a86d388dabe417dad1d",
	71: "53ca6b76822c6fd0ab53",
	72: "a11bb77c10cdf51b6da0",
	73: "baaeec7e8abd8ee7a46e",
	74: "8615288571c8db2b7e60",
	75: "a8b12f79e9dc63a5efa9",
	76: "61dc02eb17d66cd8dbee",
	77: "2b0ab12a79c0ada38422",
	78: "18f202a3801aa8ea7dd3",
	79: "65e13db7b539823c0d4f",
	80: "1672f1e7ba875cbd5406",
	81: "17427aa0541d222ba197",
	82: "76acd6c11f100b300d05",
	83: "c35569638aeb77ea5d60",
	84: "03dce09d6ca496d55414",
	85: "bf64d1c1ba71143a250f",
	86: "128934f82f953ec0c862",
	87: "b5957715ace52cd2e492",
	88: "e286c28cff169bb061d2",
	89: "3907cf1bf5dd74fb8dc5",
	90: "97ef62dc54ff57367470",
	91: "2fecff6aa6d7fe2583f5",
	92: "a040b48579b49c5a2c1f",
	93: "c76bc7f79a5d8cedd445",
	94: "8df307125a3e3f558a85",
	95: "1d94a64cb379705dd266",
	97: "6097d62712d80077211e",
	98: "a5dbf70947b3d49b71cc",
	99: "7563e0da2c28d1435544",
	100: "9fea043bcfbd2769b560",
	101: "cd7f65b5dded418b5312",
	102: "6007fce9b0bcec8a0fc1",
	103: "910894aebba3264e3827",
	104: "16c528fe1a4c28ab7d95",
	105: "04021cb85397c329ee25",
	106: "75c0c31b6fad4225a2eb",
	107: "e73f407a351bc98d7724",
	108: "3f0f93e06aa9f584633d",
	109: "c8259b774ea82d61171d",
	110: "7ff32674e9364244c257",
	111: "e91e2559d2d1676e8c93",
	112: "b82e1d2365a534a61d3a",
	113: "7f2650c5604cd812b9e0",
	114: "6cb0619ca3e2b82e1219",
	115: "6de1f08c6209164277d3",
	116: "9dbd40350fd8613a6534",
	117: "ec068a200becbc0ffa88",
	118: "62349d5c627ac3ad76b7",
	119: "18ae7b548186b2bf1d30",
	120: "7d57f6425a1c9b4a57d5",
	121: "f0d81f2bf4bcc0d76a28",
	122: "31b7b07805b28f12f7fc",
	123: "7cab461e22f5c4ed2b7e",
	124: "ae94ee1a7483a2f59c34",
	125: "f525be3163fe88719232",
	126: "73c974887e2bbf7bf49e",
	127: "f9e82fa27cfe8252070a",
	128: "76af949901130ee3cf3a",
	129: "c72bbedd428101a1fbe1",
	130: "499be40b4993b97023aa",
	131: "069811924b33aa220ede",
	132: "f707f8941d3785e4d8ab",
	133: "3cc6a6504b6f61b8ec1b",
	134: "f7409ac9058223d513d3",
	135: "7727e6177cd069102e41",
	136: "36a3463c0dd2379fe736",
	137: "a4bbcbfeca78c2cb5646",
	138: "57939ef5b8f734654890",
	139: "5ab55da9e99a4e6c3853",
	140: "2ecd50496a7c0e85c464",
	141: "1bd3c1824a17d422f9d0",
	142: "7c9c7c424577be18a91c",
	143: "568853c284f15e5e770a",
	144: "9cc6890441b5e8993132",
	145: "8be5354594909097c4b1",
	146: "72777ebddcec2aff5c55",
	147: "bf07bd59201855b6a848",
	148: "3b14d2d2fa72307b9900",
	149: "a2f7db4386ad711f19de",
	150: "1e9c43d4456c3121f128",
	151: "43272ad6b7d9dcd52bdc",
	152: "e76e013f57cafba7b35a",
	153: "4355b517fd2d3ad7d00d",
	154: "95592f0423abec422e14",
	155: "a36048ec0af7d91ca674",
	156: "f322ebb5ef1f3312378f",
	157: "07a2f47fffb85b8f70ad",
	158: "a032615a6467a4fcca42",
	159: "e919d724fc953513f592",
	160: "df695a0cf469518620fd",
	161: "415f0246ef6ad5a82570",
	162: "9639afef6774aad443c4"
}; //from boot.bundle.js

const fs = require("fs");

(async () => {
	for (let url of Object.values(chunk)) {
		fs.writeFileSync(`./analyze_dn/${url}.js`, (await axios.get(`https://ssl.pstatic.net/cmstatic/webclient/script/20200819182324/${url}.chunk.js`)).data);
	}
})();
