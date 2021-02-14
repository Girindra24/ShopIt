import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: null,
		isAdmin: true,
	},
	{
		name: "Pradeep",
		email: "pradeep@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: 1,
	},
	{
		name: "Giri",
		email: "giri@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: 2,
	},
	{
		name: "Gaurav",
		email: "gaurav@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: 3,
	},
	{
		name: "Harshitha",
		email: "harshitha@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: 4,
	},
	{
		name: "Deepika",
		email: "deepika@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: 5,
	},
	{
		name: "Sanjay",
		email: "sanjay@example.com",
		password: bcrypt.hashSync("123456", 10),
		seatNo: 6,
	},
];

export default users;
