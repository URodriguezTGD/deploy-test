export default async (req, res) => {
	switch (req.method) {
		case "POST":
			const mutations = [
				{
					create: {
						_type: "contact",
						name: req.body.fullName,
						email: req.body.email,
						subject: req.body.asunto,
						message: req.body.message,
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
			// console.log(result);
			res.status(200).json(result);
			break;
		default:
			res.status(405).end(); //Method Not Allowed
			break;
	}
	// .then((response) => response.json())
	// .then((result) => res.status(200).json(result))
	// .catch((error) => res.status(500).json(error));
};
