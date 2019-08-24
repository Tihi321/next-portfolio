class GeneralHelper {

  getExtension(string) {
    return (string.match(/\.([^.]*?)(?=\?|#|$)/) || [])[1];
  }

}

const generalHelper = new GeneralHelper();
Object.freeze(generalHelper);

export default generalHelper;

