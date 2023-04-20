import Swal from "sweetalert2";

export const  ApiAlert = () => {
    Swal.fire("Produto Cadastrado com", "Sucesso", "success")}
 
export const ApiDestroy = () => {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Você não será capaz de reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, apagar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Excluido!',
            'Seu pedido foi excluído.',
            'success'
          )
        }
      })
}