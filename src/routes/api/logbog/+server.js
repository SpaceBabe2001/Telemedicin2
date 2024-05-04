import { PrismaClient } from '@prisma/client';

export async function POST({ request, cookies }) {
	const body = await request.json();
	const prisma = new PrismaClient();
	const res = await prisma.sundhedsData.create({
		data: {
			authorId: request.user.id,
			type: body.type,
			food: body.food,
            condition: body.condition,
		}
	});
	return new Response('Created', { status: 201 });
}