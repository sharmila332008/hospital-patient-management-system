const API="/api/patients/";
const $=id=>document.getElementById(id);
const fields=["patient_id","name","age","gender","phone","email","blood_group","doctor","diagnosis","status","address"];

async function loadPatients(){
  const q=$("search").value.trim();
  const res=await fetch(API+(q?"?search="+encodeURIComponent(q):""));
  const data=await res.json();
  $("patientRows").innerHTML=data.map(p=>`<tr>
  <td>${p.patient_id}</td><td>${p.name}</td><td>${p.age}</td><td>${p.gender}</td><td>${p.phone}</td>
  <td>${p.doctor||"-"}</td><td>${p.status}</td>
  <td><button class="edit" onclick='editPatient(${JSON.stringify(p)})'>Edit</button>
  <button class="delete" onclick="deletePatient(${p.id})">Delete</button></td></tr>`).join("") || "<tr><td colspan='8'>No patients found.</td></tr>";
}
$("patientForm").addEventListener("submit",async e=>{
 e.preventDefault();
 const id=$("editId").value;
 const payload={}; fields.forEach(f=>payload[f]=$(f).value);
 payload.age=Number(payload.age);
 const res=await fetch(id?API+id+"/":API,{method:id?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
 const data=await res.json();
 if(res.ok){show("Patient saved successfully.");resetForm();loadPatients()}else show(JSON.stringify(data),"error");
});
function editPatient(p){$("editId").value=p.id;fields.forEach(f=>$(f).value=p[f]??"");$("formTitle").textContent="Edit Patient";window.scrollTo({top:0,behavior:"smooth"})}
async function deletePatient(id){if(!confirm("Delete this patient record?"))return;const r=await fetch(API+id+"/",{method:"DELETE"});if(r.ok){show("Patient deleted successfully.");loadPatients()}else show("Delete failed.","error")}
function resetForm(){$("patientForm").reset();$("editId").value="";$("formTitle").textContent="Register Patient"}
function show(msg,type="ok"){$("message").textContent=msg;$("message").style.color=type==="error"?"#c43d3d":"#16834b"}
loadPatients();
