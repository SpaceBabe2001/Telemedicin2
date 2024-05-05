import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// HTTP-request i en variabel, så instantierer vi
//en prisma-client, hasher passwordet og gemmer det i databasen
export async function POST({ request, cookies }) {
	const body = await request.json();
	const prisma = new PrismaClient();
	const hash = await bcrypt.hashSync(body.pass);
	const res = await prisma.user.create({
		data: {
			email: body.email,
			name: body.name,
			hashPass: hash
		}
	});
	console.log(res);
	return new Response('Created', { status: 201 });
}

export async function GET({ request, cookies }) {
	const prisma = new PrismaClient({ log: ['query'] });
	const res = await prisma.user.findMany();
	return new Response(JSON.stringify(res), { status: 200 });
}

// export async function DELETE({ request, cookies }) {
// 	const body = await request.json();
// 	const prisma = new PrismaClient();
// 	const res = await prisma.user.delete({ where: { email: body.email } });
// 	return new Response('Deleted', { status: 200 });
// }