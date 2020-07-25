export async function shiftProjects(projectsRef: firebase.firestore.Query) {
	const projectsDocs = await projectsRef.get();
	projectsDocs.forEach(async (doc) => {
		const docData = await doc.data();
		doc.ref.update({ order: docData.order + 1 });
	});
}
