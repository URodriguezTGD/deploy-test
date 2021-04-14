export default async (req, res) => {
	const mutations = [
		{
			create: {
				
			},
		},
	];
    
	let result = await fetch(
		`https://${process.env.PROJECT_ID}.api.sanity.io/v${process.env.API_VERSION}/data/mutate/${process.env.DATASET}`,
		{
			method: "post",
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
			},
			body: JSON.stringify({ mutations }),
		},
	);
	console.log(result);
	res.status(200).json(result);
	// .then((response) => response.json())
	// .then((result) => res.status(200).json(result))
	// .catch((error) => res.status(500).json(error));
};
