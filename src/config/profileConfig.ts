import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.png",

	// 名字
	name: "-纸鹤OvO-",

	// 个人签名
	bio: "这里是纸鹤！(≧∇≦)ﾉ",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qun.qq.com/universal-share/share?ac=1&authKey=wzxmERj41fgMEE1S9o%2BME0Fddh0axcCFFHtnQyfmMLosvM22uTHlkb3sD4%2F72zZH&busi_data=eyJncm91cENvZGUiOiI1NDIzODI1ODkiLCJ0b2tlbiI6ImpLMDE2OEhBK3hHaTROUWJ2V0Ywa21UQ1VVMld5SmVFczhtZSt3L3FpQzQ3ZHZ4YXBVN1p5SVdQTi91dTBtT1YiLCJ1aW4iOiIxNTc1ODU4NTMwIn0%3D&data=5Z4hTxcP2QDS505epN52LiCMfrrSiM-YGFLvYg0sNv802F629ng2ljPlBa-wpaDj5zBL-X_WOb9qTCkGdD1AzA&svctype=4&tempid=h5_group_info",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/LuoYu0712",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:craneovo@qq.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
