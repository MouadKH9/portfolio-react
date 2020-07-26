export async function shiftProjects(
	projectsRef: firebase.firestore.Query,
	startOrder: number
) {
	const projectsDocs = await projectsRef.get();
	projectsDocs.forEach(async (doc) => {
		const docData = await doc.data();
		if (docData.order < startOrder) return;
		doc.ref.update({ order: docData.order + 1 });
	});
}
