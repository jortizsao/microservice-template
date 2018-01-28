export default ({ commercetools }) => {
  const example = {};
  const { client, requestBuilder } = commercetools;

  example.get = async id =>
    client
      .execute({
        uri: requestBuilder.customers.parse({ id }).build(),
        method: 'GET',
      })
      .then(res => res.body);

  example.save = async customerDraft =>
    client
      .execute({
        uri: requestBuilder.customers.build(),
        method: 'POST',
        body: customerDraft,
      })
      .then(res => res.body);

  return example;
};
