export async function shiftProjects(
	projectsRef: firebase.firestore.Query,
	startOrder: number = 1,
	endOrder: number,
	offset: number
) {
	const projectsDocs = await projectsRef.get();
	projectsDocs.forEach(async (doc) => {
		const docData = doc.data();
		if (docData.order < startOrder) return;
		if (docData.order > endOrder) return;
		doc.ref.update({ order: docData.order + offset });
	});
}
