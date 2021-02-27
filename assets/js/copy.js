function copyds()
{
    navigator.clipboard.writeText('how do i run from fear#2376')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
