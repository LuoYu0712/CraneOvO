import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "这里是友链！",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: false,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "V次元",
		imgurl:"https://img.craneovo.top/file/friends/1785600467377_V次元.png",
		desc: "优质、简约的中文术力口社区",
		siteurl: "https://bbs.lty.fan",
		tags: ["社区", "中V"],
		weight: 12, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "VCPedia",
		imgurl:"https://img.craneovo.top/file/friends/VCPedia.webp",
		desc: "关于中文歌声合成的一切",
		siteurl: "https://vcpedia.cn",
		tags: ["Wiki", "中V"],
		weight: 11, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "周刊虚拟歌手中文曲",
		imgurl:"https://img.craneovo.top/file/friends/1785818392120_周刊.ico",
		desc: "看报看报！",
		siteurl: "https://www.evocalrank.com/#/",
		tags: ["周刊", "中V"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "vsqx.top",
		imgurl:"https://img.craneovo.top/file/friends/1786006210630_vsqx.ico",
		desc: "Vocaloid软件的技术文章,工程文件分享站",
		siteurl: "https://www.vsqx.top/",
		tags: ["技术", "中V"],
		weight: 9, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "夏夜流萤",
		imgurl:"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 8, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 7,
		enabled: true,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 6,
		enabled: true,
	},
	{
		title: "CloudFlare ImgBed",
		imgurl: "https://img.craneovo.top/file/friends/CloudFlare_ImgBed.png",
		desc: "支持 Docker 与 Serverless 部署的开源自建图床和文件托管方案",
		siteurl: "https://cfbed.sanyue.de/",
		tags: ["Tech"],
		weight: 5,
		enabled: true,
	},
	{
		title: "Waline",
		imgurl: "https://img.craneovo.top/file/friends/1785601127464_waline.png",
		desc: "一款简洁、安全的评论系统",
		siteurl: "https://waline.js.org/",
		tags: ["Tech"],
		weight: 4,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
