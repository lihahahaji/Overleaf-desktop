const { app, BrowserWindow, globalShortcut, Menu, MenuItem, screen } = require("electron");
// app，它着您应用程序的事件生命周期。
// BrowserWindow，它负责创建和管理应用窗口。

// createWindow 函数用于创建一个应用窗口
const createWindow = () => {
	const { screen_width, screen_height } = screen.getPrimaryDisplay().workAreaSize;
	// const window_scal = width / 1920
	
	const window_width = screen_width * 0.8;
	const window_height = screen_height * 0.8;
	// console.log(width,height)
	console.log(window_width,window_height)
	const window_x = (screen_width-window_width)/2;
	const window_y = (screen_height-window_height)/2;

	const win = new BrowserWindow({
		// 设置宽高
		width: window_width,
		height: window_height,
		x: window_x,
		y: window_y,
		// titleBarStyle: "hidden",
		// titleBarOverlay: true,
		// frame: false,
		// 失去焦点的时候隐藏窗口
		// hiddenInMissionControl:true,
		vibrancy: "sheet",
		show: false,

	});

	win.once("ready-to-show", () => {
		win.show();
		win.removeMenu();

		// win.setBounds(windowWidth,Windowheight)
		// const { width,height } = win.getBounds();
		// console.log(`Window width: ${width},${height}`);
	});

	// 监听窗口的尺寸
	win.on('resize', () => {
		
	});

	

	const menu = new Menu();
	menu.append(
		new MenuItem({
			label: "Overleaf",
			submenu: [
				{
					role: "Quit",
					accelerator:
						process.platform === "darwin" ? "Cmd+Q" : "Ctrl+Q",
					click: () => {
						console.log("Electron rocks!");
					},
				},
				{
					role: "Hide",
					accelerator:
						process.platform === "darwin" ? "Cmd+W" : "Ctrl+W",
					click: () => {
						console.log("Electron rocks!");
					},
				},
				{
					role: "Zoom",
					accelerator:
						process.platform === "darwin" ? "Cmd+F" : "Ctrl+Shift+F",
					click: () => {
						console.log("Electron rocks!");
					},
				},
				{
					role: "selectAll",
					accelerator: "Ctrl+A",
					click: () => { },
				},
				{
					role: "copy",
					accelerator: "Ctrl+C",
					click: () => { },
				},
				{
					role: "paste",
					accelerator: "Ctrl+V",
					click: () => { },
				},
				{
					role: "undo",
					accelerator: "Ctrl+Z",
					click: () => { },
				},
				{
					role: "redo",
					accelerator: "Ctrl+Shift+Z",
					click: () => { },
				},
				{
					role: "reload",
					accelerator: "Ctrl+R",
					click: () => { },
				},
			],
		})
	);
	Menu.setApplicationMenu(menu)


	// 加载网址
	win.loadURL("https://cn.overleaf.com/project");
};

// 在应用准备就绪时调用函数 创建窗口
app.whenReady().then(() => {
	createWindow();
});