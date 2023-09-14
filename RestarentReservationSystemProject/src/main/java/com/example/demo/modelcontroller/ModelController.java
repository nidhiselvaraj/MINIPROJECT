package com.example.demo.modelcontroller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.modelproject.ModelSeat;
import com.example.demo.modelservice.ModelService;

@RestController
@CrossOrigin
public class ModelController {
	@Autowired
	ModelService me;
	
	//normal method
	@PostMapping("post")
	public ModelSeat post(@RequestBody ModelSeat ms) {
		return me.postDetails(ms);
	}
	//list method
	@PostMapping("post1")
	public List<ModelSeat> postn(@RequestBody List<ModelSeat> ms){
		return me.postnDetails(ms);
	}
	
	@PutMapping("put")
	 public ModelSeat put(@RequestBody ModelSeat ms) {
		return me.putDetails(ms);
	}
	@PutMapping("put1/{id}")
	public String modifybyid(@PathVariable int id,@RequestBody ModelSeat ms) {
		return me.changeinfobyid(id ,ms);
	}
	//start
	@PutMapping("newput/{id}")
    public Optional<ModelSeat> updateModel(@PathVariable int id, @RequestBody ModelSeat updatedModel) {
        return me.updateModel(id, updatedModel);
    }
	//end
	@DeleteMapping("delete")
	public String delete(@RequestBody ModelSeat ms) {
		me.deleteDetails(ms);
		return "Deletion Succees";
	}
	@DeleteMapping("delete1/{id}")
	public void deletid(@PathVariable int id)
{
		 me.deletebyId(id);
	}
	//Sorting
		@GetMapping("sort/{str}")
		public List<ModelSeat>getsortinfo(@PathVariable String str){
			return me.sortinginfo(str);
		}
	//paging
		@GetMapping("paging/{pageno}/{pagesize}")
		public List<ModelSeat> showpageinfo(@PathVariable int pageno,@PathVariable int pagesize){
			return me.getbypage(pageno, pagesize);
			
		}
		//select by query
		@GetMapping("selectjpql/{bookingid}")
		List<ModelSeat >jpql(@PathVariable int bookingid){
			return me.getinfos(bookingid);
		}
		//delete by query
	 	@DeleteMapping("deletejpql/{bookingid}")

	 	public String DeleteDetailsByQuery(@PathVariable int bookingid) {
	 		return me.DeleteByQuery(bookingid)+"Deleted Successfully";
	 	}
	 	
	 	//update jpql
	 	@PutMapping("updatejpql/{newid}/{oldid}")

	 	public String UpdateDetailsByQuery(@PathVariable int newid, @PathVariable int oldid) {
	 		return me.UpdateByQuery(newid,oldid)+"Updated Successfully";
	 	}
	@GetMapping("get")
	public List<ModelSeat> get(){
		return me.getDetails();
	}
	

}
